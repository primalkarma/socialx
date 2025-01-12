import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import Image from "next/image";
import { relative } from "path";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "wide" | "small" | "regular" | "extraSmall" | "medium";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  coverColor: string;
  coverUrl: string;
  variant?: BookCoverVariant;
}

const BookCover = ({
  className,
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/400x600.png",
  variant = "regular",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
        <BookCoverSvg coverColor={coverColor} />
        <div 
        className="absolute z-10"
        style={{left: "12%", width: "87.5%", height: "88%"}}
        >
            <Image src={coverUrl} alt="cover" fill className="rounded-sm object-fill" />
        </div>
    </div>
  );
};

export default BookCover;
