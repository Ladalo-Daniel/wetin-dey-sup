'use client'
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";

export default function TagsIcon() {
  return ( 
        <div className="rounded-sm border-black border absolute right-8">
            <Listbox
                aria-label="Actions"
                onAction={(key) => alert(key)}
                className="bg-white dark:bg-slate"
            >
                <ListboxItem key="new tags">Create Tags</ListboxItem>
                <ListboxItem key="delete" className="text-red-600" color="danger">
                Delete Tags 
                </ListboxItem>
            </Listbox>
        </div>
      
  );
}
