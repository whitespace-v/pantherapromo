import { SITE } from "../lib/site";

// Надёжный статический блок карты: всегда работает, без внешних скриптов.
// Если захотите ЖИВУЮ карту — вставьте официальный виджет/iframe 2ГИС или
// Яндекс.Карт вместо .map-placeholder (пример в README, раздел «Карта»).
export default function MapWidget() {
  return (
    <div className="map-card reveal delay-1 visible interactive">
      {/* <div className="map-placeholder"> */}
        {/* <div>
          <span>Локация</span>
          <strong>Выселковая, 87</strong>
          <p>{SITE.address.locality}. Режим работы: {SITE.hours}.</p>
          <div className="contact-actions" style={{ justifyContent: "center" }}>
            <a className="btn btn-primary interactive" href={SITE.socials.dgis} target="_blank" rel="noopener noreferrer">
              Открыть в 2ГИС
            </a>
            <a className="btn btn-ghost interactive" href={SITE.socials.yandexMaps} target="_blank" rel="noopener noreferrer">
              Яндекс Карты
            </a>
          </div>
        </div> */}
        {/* <div style="position:relative;overflow:hidden;">
          <a 
            href="https://yandex.com/maps/org/pantera/210257527364/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;"
           >
            Пантера
            </a>
            <a 
              href="https://yandex.com/maps/75/vladivostok/category/car_service_auto_repair/184105246/?utm_medium=mapframe&utm_source=maps" 
              style="color:#eee;font-size:12px;position:absolute;top:14px;"
            >
              Автосервис, автотехцентр во Владивостоке</a>
              <a 
              href="https://yandex.com/maps/75/vladivostok/category/express_oil_change/176717353603/?utm_medium=mapframe&utm_source=maps" 
              style="color:#eee;font-size:12px;position:absolute;top:28px;"
              >
                Экспресс-пункт замены масла во Владивостоке
                </a> */}
                <iframe src="https://yandex.com/map-widget/v1/?ll=132.156175%2C43.157739&mode=search&oid=210257527364&ol=biz&sctx=ZAAAAAgBEAAaKAoSCfFmDd5XtSVAEXmxMEROl0hAEhIJAAAAAADDXkARijpzDwn7R0AiBgABAgMEBSgKOABASUgBagJ1YZ0BzczMPaABAKgBAL0Bp4zh1MIBDMSEzaKPBpmuqNDsA4ICJ9Cw0LLRgtC%2B0YLQtdGF0YbQtdC90YLRgCDQv9Cw0L3RgtC10YDQsIoCAJICAJoCDGRlc2t0b3AtbWFwc6oCKzY1ODMzMzE2OTUsMjYyMzkwMzM0MjYsMjQxMDI3NDUxMjU4LDYwMDIyNDQ%3D&sll=132.568981%2C43.157739&sspn=2.189403%2C1.304670&text=%D0%B0%D0%B2%D1%82%D0%BE%D1%82%D0%B5%D1%85%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%BF%D0%B0%D0%BD%D1%82%D0%B5%D1%80%D0%B0&z=9.35" 
                width="500" 
                height="500" 
                // frameborder="1" 
                // allowfullscreen="true" 
                // style="position:relative;"
                >
              </iframe>
              {/* </div> */}
      {/* </div> */}
    </div>
  );
}
