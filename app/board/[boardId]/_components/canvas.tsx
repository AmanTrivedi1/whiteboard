"use client"

import React, { useState } from 'react'
import { Participants } from './participants'
import { Toolbar } from './toolbar'
import { Info } from './info'
import { 
  Camera, 
  CanvasMode, 
  CanvasState, 
  Color,
  LayerType,
  Point,
  Side,
  XYWH,
} from "@/types/canvas";
import { useHistory, useSelf  , useCanRedo , useCanUndo} from '@/liveblocks.config'


interface CanvasProps {
  boardId: string;
};

export const Canvas = ({
  boardId,
}: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  

  return (
    <main className='h-full w-full bg-neutral-100 touch-none'>
        <Info boardId={boardId} />
        <Participants/>
        <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo} canUndo={canUndo}
        undo={history.undo} redo={history.redo} />
    </main>
  )
}


