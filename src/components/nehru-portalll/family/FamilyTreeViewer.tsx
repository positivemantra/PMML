"use client";

import React, { useState } from "react";
import Link from "next/link";
import coordsData from "@/data/familyCoords.json";
import membersData from "@/data/familyTree.json";
import { useApp } from "@/context/AppContext";

interface NodeCoord {
  shape: string;
  coords: string;
  id: string;
  name: string;
}

interface MemberBio {
  id: string;
  name: string;
  img: string;
  dates: string;
  description: string;
}

export default function FamilyTreeViewer() {
  const { t } = useApp();
  const coords = coordsData as NodeCoord[];
  const members = membersData as MemberBio[];
  // Helper to convert comma-separated string coords into SVG rect/polygon properties
  const renderSVGHotspots = () => {
    return coords.map((node, idx) => {
      const parts = node.coords.split(",").map(Number);
      
      if (node.shape === "rect" && parts.length === 4) {
        const [x1, y1, x2, y2] = parts;
        const x = x1;
        const y = y1;
        const width = x2 - x1;
        const height = y2 - y1;

        return (
          <rect
            key={idx}
            x={x}
            y={y}
            width={width}
            height={height}
            className="fill-transparent hover:fill-secondary/25 stroke-none hover:stroke-secondary hover:stroke-[1.5px] cursor-pointer transition-all"
            onClick={() => handleNodeClick(node.id)}
          >
            <title>{node.name}</title>
          </rect>
        );
      } else if (node.shape === "poly") {
        // Convert coordinate array [x1, y1, x2, y2...] into "x1,y1 x2,y2..."
        const points = [];
        for (let i = 0; i < parts.length; i += 2) {
          points.push(`${parts[i]},${parts[i+1]}`);
        }

        return (
          <polygon
            key={idx}
            points={points.join(" ")}
            className="fill-transparent hover:fill-secondary/25 stroke-none hover:stroke-secondary hover:stroke-[1.5px] cursor-pointer transition-all"
            onClick={() => handleNodeClick(node.id)}
          >
            <title>{node.name}</title>
          </polygon>
        );
      }
      return null;
    });
  };

  const handleNodeClick = (id: string) => {
    window.location.href = `/nehru-portal/family-tree/details#${id}`;
  };


  return (
    <div className="w-full select-none">
      {/* Responsive Family Tree Graphic */}
      <div className="relative w-full aspect-[1339/1060] mx-auto">
        {/* Main Tree Image */}
        <img
          src="/sites/all/themes/nhp/images/nehru-family-tree.jpg"
          alt="Nehru Family Tree Diagram"
          className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
        />

        {/* SVG Hotspot Overlay */}
        <svg
          viewBox="0 0 1339 1060"
          className="absolute top-0 left-0 w-full h-full z-10"
        >
          {renderSVGHotspots()}
        </svg>
      </div>
    </div>
  );
}

