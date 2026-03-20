// ============================================================
// useDragDrop — Drag items from bag to equipment slots
// Supports both mouse (HTML5 drag) and touch events
// ============================================================

import { useState, useRef, useCallback, useEffect } from 'react';

export function useDragDrop({ onDrop }) {
  const [dragging, setDragging]   = useState(null); // { item, inventoryIndex, sourceSlot }
  const [dragPos, setDragPos]     = useState({ x: 0, y: 0 });
  const [overSlot, setOverSlot]   = useState(null);
  const dragRef                   = useRef(null);
  const touchOffsetRef            = useRef({ x: 0, y: 0 });

  // ── Mouse drag handlers ───────────────────────────────────
  const onMouseDragStart = useCallback((item, inventoryIndex, e) => {
    e.preventDefault();
    setDragging({ item, inventoryIndex, sourceSlot: null });
    setDragPos({ x: e.clientX, y: e.clientY });
  }, []);

  // ── Touch drag handlers ───────────────────────────────────
  const onTouchDragStart = useCallback((item, inventoryIndex, e) => {
    const touch = e.touches[0];
    const rect  = e.currentTarget.getBoundingClientRect();
    touchOffsetRef.current = {
      x: touch.clientX - rect.left - rect.width / 2,
      y: touch.clientY - rect.top  - rect.height / 2,
    };
    setDragging({ item, inventoryIndex, sourceSlot: null });
    setDragPos({ x: touch.clientX, y: touch.clientY });
  }, []);

  // ── Global mouse/touch move ───────────────────────────────
  useEffect(() => {
    if (!dragging) return;

    function onMouseMove(e) {
      setDragPos({ x: e.clientX, y: e.clientY });
      // Find which slot is under cursor
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const slotEl = el?.closest('[data-drop-slot]');
      setOverSlot(slotEl ? slotEl.dataset.dropSlot : null);
    }

    function onTouchMove(e) {
      const touch = e.touches[0];
      setDragPos({ x: touch.clientX, y: touch.clientY });
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      const slotEl = el?.closest('[data-drop-slot]');
      setOverSlot(slotEl ? slotEl.dataset.dropSlot : null);
    }

    function onMouseUp(e) {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const slotEl = el?.closest('[data-drop-slot]');
      if (slotEl && dragging) {
        onDrop(dragging, slotEl.dataset.dropSlot);
      }
      setDragging(null);
      setOverSlot(null);
    }

    function onTouchEnd(e) {
      const touch = e.changedTouches[0];
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      const slotEl = el?.closest('[data-drop-slot]');
      if (slotEl && dragging) {
        onDrop(dragging, slotEl.dataset.dropSlot);
      }
      setDragging(null);
      setOverSlot(null);
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend',  onTouchEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup',   onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend',  onTouchEnd);
    };
  }, [dragging, onDrop]);

  return {
    dragging,
    dragPos,
    overSlot,
    onMouseDragStart,
    onTouchDragStart,
  };
}
