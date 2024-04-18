import type { CloudinaryProps } from "@/types/CloudinaryProps";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { autoGravity, focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { ResizeFillAction } from "@cloudinary/url-gen/actions/resize/ResizeFillAction";
import { byRadius, max } from "@cloudinary/url-gen/actions/roundCorners";
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import {
  blur,
  grayscale,
  sepia,
  shadow,
  colorize,
  oilPaint,
  cartoonify,
  outline,
  blackwhite,
  makeTransparent,
  vectorize,
  gradientFade,
  assistColorBlind,
  backgroundRemoval,
  dropShadow,
} from "@cloudinary/url-gen/actions/effect";
import {
  crop,
  fill,
  scale,
  minimumPad,
  fit,
  limitFit,
  thumbnail,
  limitFill,
  minimumFit,
  limitPad,
  fillPad,
} from "@cloudinary/url-gen/actions/resize";

const cloudName = import.meta.env.CLOUDINARY_CLOUD_NAME;
const apiKey = import.meta.env.CLOUDINARY_API_KEY;
const apiSecret = import.meta.env.CLOUDINARY_API_SECRET;

interface Props extends CloudinaryProps {
  src: string;
  alt: string;
  errorImage?: string;
  svg?: boolean;
}

export const getCloudinarySrc = ({ src, ...props }: Props) => {
  if (cloudName === undefined || cloudName === null || cloudName === "") {
    throw new Error("Cloudinary cloud name is not defined");
  }

  const cloudinaryMedia = new Cloudinary({
    cloud: {
      cloudName: cloudName,
      apiKey: apiKey,
      apiSecret,
    },
  });

  const imageSource = src.startsWith("https://")
    ? cloudinaryMedia.image(src).setDeliveryType("fetch")
    : cloudinaryMedia.image(src);

  if (props.effects !== undefined && props.effects !== null) {
    for (const effect of props.effects) {
      let effectFunction;
      switch (effect) {
        case "blur":
          effectFunction = blur();
          break;
        case "grayscale":
          effectFunction = grayscale();
          break;
        case "sepia":
          effectFunction = sepia();
          break;
        case "shadow":
          effectFunction = shadow();
          break;
        case "colorize":
          effectFunction = colorize();
          break;
        case "oilPaint":
          effectFunction = oilPaint();
          break;
        case "cartoonify":
          effectFunction = cartoonify();
          break;
        case "outline":
          effectFunction = outline();
          break;
        case "blackwhite":
          effectFunction = blackwhite();
          break;
        case "makeTransparent":
          effectFunction = makeTransparent();
          break;
        case "vectorize":
          effectFunction = vectorize();
          break;
        case "gradientFade":
          effectFunction = gradientFade();
          break;
        case "assistColorBlind":
          effectFunction = assistColorBlind();
          break;
        case "backgroundRemoval":
          effectFunction = backgroundRemoval();
          break;
        case "dropShadow":
          effectFunction = dropShadow();
          break;
        default:
          effectFunction = blur();
          break;
      }
      imageSource.effect(effectFunction);
    }
  }
  if (props.svg) {
    imageSource.format("svg").quality("auto");
  }

  if (props.resize !== undefined && props.resize !== null) {
    let resizeFunction;
    switch (props.resize) {
      case "crop":
        resizeFunction = crop();
        break;
      case "fill":
        resizeFunction = fill();
        break;
      case "scale":
        resizeFunction = scale();
        break;
      case "minimumPad":
        resizeFunction = minimumPad();
        break;
      case "fit":
        resizeFunction = fit();
        break;
      case "limitFit":
        resizeFunction = limitFit();
        break;
      case "thumbnail":
        resizeFunction = thumbnail();
        break;
      case "limitFill":
        resizeFunction = limitFill();
        break;
      case "minimumFit":
        resizeFunction = minimumFit();
        break;
      case "limitPad":
        resizeFunction = limitPad();
        break;
      case "fillPad":
        resizeFunction = fillPad();
        break;
      default:
        resizeFunction = fill();
        break;
    }

    resizeFunction.width(`${props.width}px`);
    resizeFunction.height(`${props.height}px`);

    if (
      resizeFunction instanceof ResizeFillAction &&
      props.gravity !== undefined &&
      props.gravity !== null
    ) {
      resizeFunction.gravity(
        props.gravity === "face" ? focusOn(FocusOn.faces()) : autoGravity()
      );
    }

    imageSource.resize(resizeFunction);
  }

  if (props.cornerRadius !== undefined && props.cornerRadius !== null) {
    imageSource.roundCorners(
      props.cornerRadius === "max" ? max() : byRadius(props.cornerRadius)
    );
  }

  if (props.rotate !== undefined && props.rotate !== null) {
    imageSource.rotate(byAngle(props.rotate));
  }
  return imageSource.toURL();
};
