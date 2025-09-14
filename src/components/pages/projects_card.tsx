import * as React from 'react';
import { cn } from "@/components/shadcn-ui/lib/utils"; 

export default function Card({title, description, link, image}: {title:string, description: string, link:string, image:string}){
    return (
    
    <div
        className={cn(
        "w-full border rounded-lg shadow-md overflow-hidden transition hover:shadow-xl hover:scale-[1.02] duration-300"
      )}
    >
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    );
        
    
}