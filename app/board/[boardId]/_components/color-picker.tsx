"use client";

import { Color } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";

interface ColorPickerProps {
  onChange: (color: Color) => void;
};

export const ColorPicker = ({
  onChange,
}: ColorPickerProps) => {
  return (
    <div
      className="flex flex-wrap rounded-md gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200"
    >
      <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 249, b: 177 }} onClick={onChange} />
      <ColorButton color={{ r: 68, g: 202, b: 99 }} onClick={onChange} />
      <ColorButton color={{ r: 155, g: 105, b: 245 }} onClick={onChange} />
      <ColorButton color={{ r: 252, g: 142, b: 42 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 122, b: 255 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 32, b: 78 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 127, b: 115 }} onClick={onChange} />
      <ColorButton color={{ r: 34, g: 40, b: 49 }} onClick={onChange} />
      <ColorButton color={{ r: 18, g: 64, b: 18 }} onClick={onChange} />
      <ColorButton color={{ r: 117, g: 14, b: 33 }} onClick={onChange} />

      <ColorButton color={{ r: 239, g: 188, b: 155 }} onClick={onChange} />
      <ColorButton color={{ r: 60, g: 54, b: 54 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 152, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 100, g: 32, b: 170 }} onClick={onChange} />

      <ColorButton color={{ r: 57, g: 48, b: 83 }} onClick={onChange} />
      <ColorButton color={{ r: 88, g: 163, b: 153 }} onClick={onChange} />
      <ColorButton color={{ r: 62, g: 50, b: 50 }} onClick={onChange} />
      <ColorButton color={{ r: 16, g: 44, b: 87 }} onClick={onChange} />
      <ColorButton color={{ r: 107, g: 36, b: 12 }} onClick={onChange} />
      <ColorButton color={{ r: 197, g: 137, b: 64 }} onClick={onChange} />
      <ColorButton color={{ r: 48, g: 46, b: 209 }} onClick={onChange} />
    </div>
  )
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
};

const ColorButton = ({
  onClick,
  color,
}: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div 
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  )
}


