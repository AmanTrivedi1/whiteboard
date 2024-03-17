import React from 'react'
import { EmptySearch } from './empty-search';
import { EmptyFavorites } from './empty-favorites';
import { EmptyBoards } from './empty-boards';


interface BoardListProps {
    orgId: string;
    query: {
      search?: string;
      favorites?: string;
    };
  };

  export const BoardList = ({
    orgId,
    query,
  }: BoardListProps) => {

  const data=[];

  if(!data.length && query.search){
    return (
        <EmptySearch/>
    )
  }
  if(!data.length && query.favorites){
    return (
       <div>
           <EmptyFavorites/>
       </div> 
    )
  }
   if(!data.length) {
    return (
    <div>
        <EmptyBoards/>
    </div>
  )}

  return (
    <div>
      
    </div>
  )
}


