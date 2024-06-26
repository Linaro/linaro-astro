""" Get dynamic AWS credentials """
#!/usr/bin/python3
#
# For a given profile name, role ID, secret ID and role, set the two AWS
# environment variables to the secret values.


import sys
import getopt
import requests


def vault_login(role_id, secret_id, aws_role):
    """ Log into Vault to retrieve secret """
    access_key = None
    secret_key = None
    security_token = None
    # Since this code doesn't run on an EC2 instance, we use the AppRole
    # authentication method.
    data = {
        "role_id": role_id,
        "secret_id": secret_id
    }
    r = requests.post(
        "https://login.linaro.org:8200/v1/auth/approle/login",
        json=data,
        timeout=30
    )
    # That gets us the vault token. Now get the credentials for the specified
    # profile/account name.
    header = {
        "X-Vault-Token": r.json()["auth"]["client_token"]
    }
    r = requests.post(
        f"https://login.linaro.org:8200/v1/aws/sts/{aws_role}",
        headers=header,
        timeout=30
    )
    if r.status_code == 200:
        result = r.json()
        access_key = result["data"]["access_key"]
        secret_key = result["data"]["secret_key"]
        security_token = result["data"]["security_token"]
    # Now revoke the client token
    requests.post(
        "https://login.linaro.org:8200/v1/auth/token/revoke-self",
        headers=header,
        timeout=30)
    return access_key, secret_key, security_token

def main(argv):
    """ Main! """
    role_id = None
    secret_id = None
    aws_role = None
    try:
        opts, _ = getopt.getopt(argv, "i:s:r:")
    except Exception:
        print(
            "get_aws_creds.py"
            " -i <role ID>"
            " -s <secret ID>"
            " -r <AWS role>")
        sys.exit(1)
    for opt, arg in opts:
        if opt == "-i":
            role_id = arg
        if opt == "-s":
            secret_id = arg
        if opt == "-r":
            aws_role = arg
    if (role_id is None or
            secret_id is None or
            aws_role is None):
        print(
            "get_aws_creds.py"
            " -i <role ID>"
            " -s <secret ID>"
            " -r <AWS role>")
        sys.exit(1)
    access, secret, token = vault_login(
        role_id,
        secret_id,
        aws_role
    )
    if access is None:
        print("Failed to authenticate or invalid role specified.")
        sys.exit(1)
    print(f"export AWS_ACCESS_KEY_ID={access}")
    print(f"export AWS_SECRET_ACCESS_KEY={secret}")
    print(f"export AWS_SESSION_TOKEN={token}")


if __name__ == "__main__":
    main(sys.argv[1:])
