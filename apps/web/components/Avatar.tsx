import { cn } from "@lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image, { ImageProps } from "next/image";

type AvatarProps = AvatarPrimitive.AvatarProps;

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full bg-slate-100",
        className
      )}
      {...props}
    />
  );
};

Avatar.Fallback = function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback delayMs={500} className={className} {...props}>
      {children}
    </AvatarPrimitive.Fallback>
  );
};

Avatar.Image = function AvatarImage({
  src,
  className,
  alt,
  width = 32,
  height = 32,
  ...props
}: ImageProps) {
  return (
    <Image
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};
