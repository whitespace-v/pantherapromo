"use client";
import { useEffect, useRef, useState } from "react";
import "MapWidget.css";

export default function MapWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }, // подгружаем чуть заранее, до фактического появления
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="map-card reveal delay-1 visible interactive">
      {show ? (
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=132.156175%2C43.157739&mode=search&oid=210257527364&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJAAAAAADDXkARijpzDwn7R0AiBgABAgMEBSgKOABASUgBagJ1YZ0BzczMPaABAKgBAL0Bp4zh1MIBDMSEzaKPBpmuqNDsA4ICJ9Cw0LLRgtC%2B0YLQtdGF0YbQtdC90YLRgCDQv9Cw0L3RgtC10YDQsIoCAJICAJoCDGRlc2t0b3AtbWFwc6oCKzY1ODMzMzE2OTUsMjYyMzkwMzM0MjYsMjQxMDI3NDUxMjU4LDYwMDIyNDQ%3D&sll=132.568981%2C43.157739&sspn=2.189403%2C1.304670&text=%D0%B0%D0%B2%D1%82%D0%BE%D1%82%D0%B5%D1%85%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%BF%D0%B0%D0%BD%D1%82%D0%B5%D1%80%D0%B0&z=9.35"
          title="Карта проезда — Автотехцентр Пантера, Владивосток"
          loading="lazy"
          style={{ width: "100%", height: 400, border: 0, display: "block" }}
        />
      ) : (
        <div className="map-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}
