"use client"


import React from 'react'
import { Participants } from './participants'
import { Toolbar } from './toolbar'
import { Info } from './info'

interface CanvasProps {
  boardId: string;
};

export const Canvas = ({
  boardId,
}: CanvasProps) => {
  return (
    <main className='h-full w-full bg-neutral-100 touch-none'>
        <Info/>
        <Participants/>
        <Toolbar/>
    </main>
  )
}


