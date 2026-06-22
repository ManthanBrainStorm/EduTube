"use client";

import { Link2, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_PLAYLIST_URL } from "@/lib/constants";

export function ImportBar() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function handleImport() {
    if (loading) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="surface flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube playlist URL to import..."
          className="h-10 border-border/60 bg-background/50 pl-10"
        />
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setUrl(DEMO_PLAYLIST_URL)}
        >
          Demo URL
        </Button>
        <Button size="sm" onClick={handleImport} disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Importing...
            </>
          ) : (
            "Import"
          )}
        </Button>
      </div>
    </div>
  );
}
