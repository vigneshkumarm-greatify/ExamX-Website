"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  svgPath: string;
  color?: string;
  fillColor?: string;
  width?: number;
  height?: number;
}

const svgCache = new Map<string, string>();

function buildCacheKey(
  svgPath: string,
  color?: string,
  fillColor?: string,
  width?: number,
  height?: number
): string {
  return `${svgPath}|${color ?? ""}|${fillColor ?? ""}|${width ?? ""}|${height ?? ""}`;
}

export default function SvgIcon({
  svgPath,
  color,
  fillColor,
  width,
  height,
  ...props
}: SvgIconProps) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    const cacheKey = buildCacheKey(svgPath, color, fillColor, width, height);

    if (svgCache.has(cacheKey)) {
      setSvgContent(svgCache.get(cacheKey)!);
      return;
    }

    let cancelled = false;

    async function fetchSvg() {
      try {
        const response = await fetch(svgPath);
        if (!response.ok) {
          console.error(`SvgIcon: Failed to fetch ${svgPath} (${response.status})`);
          return;
        }

        const processedSvg = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(processedSvg, "image/svg+xml");
        const svgElement = doc.querySelector("svg");

        if (!svgElement) {
          console.error(`SvgIcon: No <svg> element found in ${svgPath}`);
          return;
        }

        // Apply width and height
        if (width) svgElement.setAttribute("width", String(width));
        if (height) svgElement.setAttribute("height", String(height));

        // Apply color (stroke) and fillColor to all child elements
        const allElements = svgElement.querySelectorAll("*");
        allElements.forEach((el) => {
          if (color) {
            const currentStroke = el.getAttribute("stroke");
            if (currentStroke && currentStroke !== "none") {
              el.setAttribute("stroke", color);
            }
          }
          if (fillColor) {
            const currentFill = el.getAttribute("fill");
            if (currentFill && currentFill !== "none") {
              el.setAttribute("fill", fillColor);
            }
          }
        });

        // Also apply to the root svg element
        if (color) {
          const rootStroke = svgElement.getAttribute("stroke");
          if (rootStroke && rootStroke !== "none") {
            svgElement.setAttribute("stroke", color);
          }
        }
        if (fillColor) {
          const rootFill = svgElement.getAttribute("fill");
          if (rootFill && rootFill !== "none") {
            svgElement.setAttribute("fill", fillColor);
          }
        }

        const sanitized = DOMPurify.sanitize(svgElement.outerHTML, {
          USE_PROFILES: { svg: true, svgFilters: true },
        });

        if (!cancelled) {
          svgCache.set(cacheKey, sanitized);
          setSvgContent(sanitized);
        }
      } catch (error) {
        console.error(`SvgIcon: Error loading ${svgPath}`, error);
      }
    }

    fetchSvg();

    return () => {
      cancelled = true;
    };
  }, [svgPath, color, fillColor, width, height]);

  if (!svgContent) return null;

  return (
    <span
      {...props}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
