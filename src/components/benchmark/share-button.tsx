"use client";

import { Button } from "@/components/ui/button";
import { Share2, Check } from "lucide-react";
import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setFailed(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setFailed(true);
      setTimeout(() => setFailed(false), 2500);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="h-8 px-3 text-xs"
      onClick={handleShare}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 mr-1.5 text-emerald-500" />
          Copied!
        </>
      ) : failed ? (
        <>
          <Share2 className="h-3 w-3 mr-1.5 text-amber-500" />
          Copy failed
        </>
      ) : (
        <>
          <Share2 className="h-3 w-3 mr-1.5" />
          Share
        </>
      )}
    </Button>
  );
}
