/* @ds-bundle: {"format":4,"namespace":"EstheticDesignSystem_0d059d","components":[{"name":"MonoLabel","sourcePath":"components/brand/MonoLabel.jsx"},{"name":"SpecList","sourcePath":"components/brand/SpecList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/MonoLabel.jsx":"e999d48538af","components/brand/SpecList.jsx":"58f946508aec","components/core/Badge.jsx":"13af39b907f5","components/core/Button.jsx":"f3486620f1f0","components/core/Card.jsx":"0dfd0f331d0c","components/core/Icon.jsx":"79a1797b56c1","components/core/IconButton.jsx":"f7c4b429696d","components/core/Tag.jsx":"19e56da6eb08","components/feedback/Dialog.jsx":"42987cd7ea8f","components/feedback/Tooltip.jsx":"121c18647ccf","components/forms/Checkbox.jsx":"fb31c5095483","components/forms/Field.jsx":"42be35079db1","components/forms/Input.jsx":"6a427bc0a6b1","components/forms/Radio.jsx":"9dcda1d9e11d","components/forms/Select.jsx":"9d06d8a05a8d","components/forms/Switch.jsx":"80779fb80a5c","components/navigation/Tabs.jsx":"4fb3fa3075df","ui_kits/campaign/CampaignApp.jsx":"344fef537412","ui_kits/campaign/CampaignParts.jsx":"e0aa46335d30","ui_kits/storefront/StorefrontApp.jsx":"432494e5f54b","ui_kits/storefront/StorefrontParts.jsx":"cefa356600f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EstheticDesignSystem_0d059d = window.EstheticDesignSystem_0d059d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/MonoLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MonoLabel({
  vertical = false,
  highlight = false,
  rule = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['mte-monolabel', vertical ? 'mte-monolabel--vertical' : '', highlight ? 'mte-monolabel--highlight' : '', className].filter(Boolean).join(' ')
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    className: "mte-monolabel__rule"
  }), children);
}
Object.assign(__ds_scope, { MonoLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/MonoLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpecList({
  items = [],
  dense = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    className: ['mte-spec', dense ? 'mte-spec--dense' : '', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "mte-spec__row",
    key: i
  }, /*#__PURE__*/React.createElement("dt", {
    className: "mte-spec__k"
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    className: "mte-spec__v",
    style: {
      margin: 0
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = 'outline',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['mte-badge', 'mte-badge--' + variant, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft,
  iconRight,
  as = 'button',
  href,
  children,
  className = '',
  ...rest
}) {
  const Tag = as === 'a' ? 'a' : 'button';
  const cls = ['mte-btn', 'mte-btn--' + variant, 'mte-btn--' + size, block ? 'mte-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevation = 'flat',
  inverse = false,
  interactive = false,
  padded = true,
  children,
  className = '',
  ...rest
}) {
  const cls = ['mte-card', 'mte-card--' + elevation, inverse ? 'mte-card--inverse' : '', interactive ? 'mte-card--interactive' : '', padded ? 'mte-card__pad' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Thin wrapper over the Lucide CDN sprite. Requires lucide's script on the page (see readme ICONOGRAPHY). */
function Icon({
  name,
  size = 18,
  stroke = 1.75,
  className = '',
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      },
      nameAttr: 'data-lucide'
    });
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    className: className,
    style: {
      width: size,
      height: size,
      display: 'inline-flex'
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = 'ghost',
  size = 'md',
  'aria-label': label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    className: ['mte-iconbtn', 'mte-iconbtn--' + variant, 'mte-iconbtn--' + size, className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['mte-tag', selected ? 'mte-tag--selected' : '', onRemove ? 'mte-tag--removable' : '', className].filter(Boolean).join(' ')
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "mte-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  children,
  className = '',
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mte-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    className: ['mte-dialog', className].filter(Boolean).join(' '),
    onClick: e => e.stopPropagation()
  }, rest), onClose && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "ghost",
    size: "sm",
    "aria-label": "Close",
    onClick: onClose
  }, "\xD7")), title && /*#__PURE__*/React.createElement("h2", {
    className: "mte-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mte-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "mte-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['mte-tt', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "mte-tt__bub",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['mte-choice', disabled ? 'mte-choice--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mte-choice__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mte-choice__mark"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['mte-field', className].filter(Boolean).join(' ')
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "mte-field__label",
    htmlFor: htmlFor
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "mte-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "mte-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  pill = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['mte-input', invalid ? 'mte-input--invalid' : '', pill ? 'mte-input--pill' : '', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['mte-choice', disabled ? 'mte-choice--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mte-choice__box mte-choice__box--round"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mte-choice__dot"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "mte-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ['mte-select', className].filter(Boolean).join(' ')
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['mte-choice', disabled ? 'mte-choice--disabled' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mte-switch"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mte-switch__knob"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  const active = value ?? items[0]?.value ?? items[0];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['mte-tabs', variant === 'pill' ? 'mte-tabs--pill' : '', className].filter(Boolean).join(' ')
  }, rest), items.map(it => {
    const v = typeof it === 'string' ? it : it.value;
    const l = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": v === active,
      className: ['mte-tab', v === active ? 'mte-tab--active' : ''].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(v)
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/campaign/CampaignApp.jsx
try { (() => {
const {
  Tabs,
  MonoLabel
} = window.EstheticDesignSystem_0d059d;
function App() {
  const [view, setView] = React.useState('Editorial');
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        'stroke-width': 1.75
      }
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 56px'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    rule: true
  }, "Campaign \u2014 Dam Albert 2K26"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ['Editorial', 'Social'],
    value: view,
    onChange: setView
  })), view === 'Editorial' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EditorialHero, null), /*#__PURE__*/React.createElement(SpecBlock, null), /*#__PURE__*/React.createElement(BuyBlock, null)), view === 'Social' && /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 56px 80px',
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PosterStory, null), /*#__PURE__*/React.createElement(PosterSquare, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/campaign/CampaignApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/campaign/CampaignParts.jsx
try { (() => {
const {
  Button,
  IconButton,
  Badge,
  Icon,
  MonoLabel,
  SpecList,
  Card
} = window.EstheticDesignSystem_0d059d;
const DPH = ({
  label,
  ratio = '4 / 3',
  radius = 0,
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: ratio,
    borderRadius: radius,
    background: 'linear-gradient(145deg,#31373b,#0e1113 58%,#23282b)',
    display: 'grid',
    placeItems: 'center',
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontSize: 9,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.28)'
  }
}, label));
function PosterStory() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 360,
      height: 640,
      background: 'linear-gradient(160deg,#34393d,#0c0e10 55%,#1c2023)',
      borderRadius: 20,
      overflow: 'hidden',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      top: 24,
      color: 'rgba(255,255,255,.4)'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    vertical: true,
    style: {
      fontSize: 8,
      color: 'inherit'
    }
  }, "Dam Albert \xB7 2K26 \xB7 Imports")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 96,
      textAlign: 'center',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 400,
      letterSpacing: '-.03em',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "Assist\xEAncia t\xE9cnica"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '-.035em',
      color: '#fff',
      lineHeight: 1.05
    }
  }, "especializada."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,.78)',
      marginTop: 14
    }
  }, "Atendemos qualquer modelo, com interven\xE7\xE3o t\xE9cnica inclusive em n\xEDvel de placa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 16,
      marginTop: 18,
      color: 'rgba(255,255,255,.8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "tablet",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "laptop",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "watch",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "cpu",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 56,
      background: '#0c0e10',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    style: {
      fontSize: 8,
      color: 'rgba(255,255,255,.45)'
    }
  }, "Dam Albert"), /*#__PURE__*/React.createElement(MonoLabel, {
    style: {
      fontSize: 8,
      color: 'rgba(255,255,255,.45)'
    }
  }, "2K26"), /*#__PURE__*/React.createElement(MonoLabel, {
    style: {
      fontSize: 8,
      color: 'rgba(255,255,255,.45)'
    }
  }, "Imports")));
}
function PosterSquare() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 360,
      height: 360,
      background: '#0c0e10',
      borderRadius: 20,
      overflow: 'hidden',
      flex: 'none',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent"
  }, "2K26"), /*#__PURE__*/React.createElement(MonoLabel, {
    style: {
      fontSize: 9,
      color: 'rgba(255,255,255,.4)'
    }
  }, "Ref. 03 / 12")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 46,
      fontWeight: 800,
      letterSpacing: '-.04em',
      lineHeight: .95,
      color: '#fff'
    }
  }, "Board-level", /*#__PURE__*/React.createElement("br", null), "repair."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    style: {
      fontSize: 9,
      color: 'rgba(255,255,255,.5)'
    }
  }, "Any model \u2014 48h"), /*#__PURE__*/React.createElement(Button, {
    variant: "glass",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 14
    })
  }, "Book")));
}
function EditorialHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 56px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 300px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    style: {
      fontSize: 20,
      padding: '4px 10px'
    }
  }, "1976"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      marginTop: 20,
      maxWidth: '44ch'
    }
  }, "The Braun 2056 / 3056 Super 8 camera was on the market from 1976 to 1980. It's a beautifully designed and well-built piece of camera technology."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '44ch'
    }
  }, "The 2056 was designed during Braun's famous Dieter Rams era when the design team's motto was \"less but better\", resulting in long-lasting and timeless products.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9',
      borderRadius: 6,
      background: 'linear-gradient(150deg,#f2f3f4,#dfe2e4 65%,#eceeef)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Product photograph \u2014 full bleed")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-mono)'
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 18,
      top: 56,
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "2K26 \xB7 All rights reserved"));
}
function SpecBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 56px',
      display: 'grid',
      gridTemplateColumns: 'minmax(200px,300px) minmax(0,1fr) minmax(240px,320px)',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 999,
      background: 'linear-gradient(150deg,#2b3034,#0f1113)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.2em',
      color: 'rgba(255,255,255,.3)'
    }
  }, "MACRO 01")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1/1',
      borderRadius: 999,
      background: 'linear-gradient(150deg,#e7e9ea,#c9cdcf)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.2em',
      color: 'var(--text-faint)'
    }
  }, "MACRO 02"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(34px,3.8vw,52px)',
      fontWeight: 400,
      letterSpacing: '-.035em',
      lineHeight: .96,
      color: 'var(--text-strong)'
    }
  }, "Really", /*#__PURE__*/React.createElement("br", null), "Precision"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '50ch',
      marginTop: 24
    }
  }, "8:1 ration macro Schneider Variogon, motor zoom at two speeds, bright and clear viewfinder, complete with all the information your need accurately displayed."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '50ch'
    }
  }, "Six different film speeds, time lapse, single frame exposure for trick and animation filming and finally a built-in hand-grip that easily folds away to assure firm steady handling."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--acid-400)',
      padding: '14px 16px 8px',
      display: 'grid',
      gap: 8,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      letterSpacing: '.06em'
    }
  }, "0001100110011")))), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Weight',
      value: '1800 g'
    }, {
      label: 'Lens',
      value: '1,4 / 7 – 56 mm'
    }, {
      label: 'Macro focusing'
    }, {
      label: 'Split image focusing'
    }, {
      label: 'Auto / manual zoom with 2 speeds'
    }, {
      label: 'Frame rates',
      value: '9,16 2/3,18,24,25,36 + single'
    }, {
      label: 'Shutter degree',
      value: 'Var.'
    }, {
      label: 'Auto exposure'
    }, {
      label: 'Backlight control'
    }, {
      label: '+/- correction for auto'
    }, {
      label: 'Time exposure'
    }, {
      label: 'Fades'
    }, {
      label: 'Interval timer'
    }, {
      label: 'Auto recording level control'
    }]
  }));
}
function BuyBlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 56px 80px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 40,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 400,
      letterSpacing: '-.035em',
      lineHeight: 1,
      color: 'var(--text-strong)'
    }
  }, "Braun\xAE Iconic", /*#__PURE__*/React.createElement("br", null), "Quality"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, null, "Braun\xAE Super 8 Nizo 2056\u2122 Sound Camera")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      aspectRatio: '21 / 9',
      borderRadius: 6,
      background: 'linear-gradient(150deg,#f2f3f4,#dcdfe1 70%)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Product photograph"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--acid-400)',
      display: 'inline-block',
      padding: '6px 12px',
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      fontWeight: 700,
      letterSpacing: '-.03em',
      color: 'var(--ink-950)'
    }
  }, "359.99 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, "USD")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.04em',
      color: 'var(--text-muted)',
      lineHeight: 1.7
    }
  }, "ITEM NUMBER: 402798193623", /*#__PURE__*/React.createElement("br", null), "READ ITEM DESCRIPTION OR ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'underline'
    }
  }, "CONTACT SELLER"), " FOR SHIPPING OPTIONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 14
    })
  }, "Book now"))));
}
Object.assign(window, {
  DPH,
  PosterStory,
  PosterSquare,
  EditorialHero,
  SpecBlock,
  BuyBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/campaign/CampaignParts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StorefrontApp.jsx
try { (() => {
const {
  Dialog,
  Button,
  Icon
} = window.EstheticDesignSystem_0d059d;
function App() {
  const [route, setRoute] = React.useState('home');
  const [cart, setCart] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const add = () => {
    setCart(c => c + 1);
    setOpen(true);
  };
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        'stroke-width': 1.75
      }
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    route: route,
    go: setRoute,
    cart: cart,
    onCart: () => setOpen(true)
  }), route === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: setRoute,
    onAdd: add
  }), /*#__PURE__*/React.createElement(Collections, {
    go: setRoute,
    onAdd: add
  })), route === 'collections' && /*#__PURE__*/React.createElement(Collections, {
    go: setRoute,
    onAdd: add
  }), route === 'product' && /*#__PURE__*/React.createElement(Product, {
    go: setRoute,
    onAdd: add
  }), route === 'contact' && /*#__PURE__*/React.createElement(Contact, {
    go: setRoute
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: cart ? 'Added to cart' : 'Your cart is empty',
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Keep looking"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => setOpen(false)
    }, "Checkout"))
  }, cart ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PH, {
    label: "",
    ratio: "1 / 1",
    radius: 12,
    style: {
      width: 64
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)'
    }
  }, "C45 Classic"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, cart, " ITEM", cart > 1 ? 'S' : '', " \xB7 \xA3", (2290 * cart).toLocaleString()))) : 'Add a model to continue.'));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StorefrontApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StorefrontParts.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Icon,
  Input,
  Tabs,
  MonoLabel,
  SpecList,
  Field,
  Select,
  Checkbox,
  Switch,
  Dialog,
  Tooltip
} = window.EstheticDesignSystem_0d059d;
const PH = ({
  label,
  ratio = '4 / 3',
  radius = 20,
  dark = false,
  style = {}
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: ratio,
    borderRadius: radius,
    background: dark ? 'linear-gradient(150deg,#2c3135,#111416 62%,#1e2225)' : 'linear-gradient(150deg,#eceeef,#dfe2e4 60%,#e9ebec)',
    display: 'grid',
    placeItems: 'center',
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontSize: 9,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color: dark ? 'rgba(255,255,255,.3)' : 'var(--text-faint)'
  }
}, label));
function TopNav({
  route,
  go,
  cart,
  onCart
}) {
  const items = [['about', 'About'], ['collections', 'Collections'], ['services', 'Services'], ['options', 'Options']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '14px 20px',
      background: 'rgba(246,247,248,.72)',
      backdropFilter: 'var(--blur-glass)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k === 'collections' ? 'collections' : route),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-body)',
      padding: 0
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    },
    onClick: () => go('home')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: 'var(--signal-500)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '-.03em',
      color: 'var(--text-strong)'
    }
  }, "Skot.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Theme"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    "aria-label": "Theme"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "moon",
    size: 17
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => go('contact')
  }, "Contact us"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Support"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    "aria-label": "Support"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "life-buoy",
    size: 17
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 42,
      padding: '0 6px 0 18px',
      border: 0,
      borderRadius: 999,
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-2)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Cart", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: 'var(--ink-950)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 11,
      fontFamily: 'var(--font-mono)'
    }
  }, cart))));
}
function Hero({
  go,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '0 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 32,
      background: 'var(--ink-100)',
      overflow: 'hidden',
      minHeight: 660,
      padding: '56px 48px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(40px,5vw,68px)',
      lineHeight: '1.02',
      letterSpacing: '-.04em',
      color: 'var(--text-strong)'
    }
  }, "Super fast", /*#__PURE__*/React.createElement("br", null), "electric Moped"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      top: 56,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      maxWidth: 210
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: 'var(--ink-300)',
      boxShadow: '0 0 0 2px var(--ink-100)',
      marginLeft: i ? -8 : 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      marginLeft: -8,
      borderRadius: 999,
      background: 'var(--ink-950)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      boxShadow: '0 0 0 2px var(--ink-100)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.35,
      color: 'var(--text-body)'
    }
  }, "10k+ positive reviews we achieved ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--acid-600)'
    }
  }, "\u2605\u2605\u2605\u2605"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '215px 250px 200px 230px'
    }
  }, /*#__PURE__*/React.createElement(PH, {
    label: "Hero product cut-out",
    ratio: "auto",
    radius: 0,
    style: {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--line-hairline)',
      borderRadius: 20,
      height: '100%',
      aspectRatio: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 40,
      width: 250,
      background: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: '-.03em',
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, "C45"), /*#__PURE__*/React.createElement(MonoLabel, null, "Classic Model"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      marginTop: 12
    }
  }, "Officially the UK's No.1 selling moped. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      textDecoration: 'underline'
    }
  }, "This 50cc"), " Panther moped is agile and ready to strike."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    }),
    onClick: () => go('product')
  }, "View model")), /*#__PURE__*/React.createElement(Card, {
    elevation: "raised",
    interactive: true,
    padded: false,
    style: {
      position: 'absolute',
      right: 48,
      bottom: 40,
      width: 210,
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    },
    onClick: () => go('product')
  }, /*#__PURE__*/React.createElement(PH, {
    label: "",
    ratio: "1 / 1",
    radius: 12,
    style: {
      width: 52
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-.02em',
      color: 'var(--text-strong)'
    }
  }, "DB50QT"), /*#__PURE__*/React.createElement(MonoLabel, null, "Panther Moped")))));
}
const MODELS = [{
  id: 'c45',
  name: 'C45',
  sub: 'Classic Model',
  price: '2,290',
  badge: 'Best seller'
}, {
  id: 'db50',
  name: 'DB50QT',
  sub: 'Panther Moped',
  price: '1,980',
  badge: null
}, {
  id: 'nx2',
  name: 'NX2',
  sub: 'City Commuter',
  price: '2,640',
  badge: 'New'
}, {
  id: 'r9',
  name: 'R9 Sport',
  sub: 'Performance',
  price: '3,410',
  badge: null
}];
function Collections({
  go,
  onAdd
}) {
  const [tab, setTab] = React.useState('All');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 20px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      margin: '48px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MonoLabel, {
    rule: true
  }, "Collections \u2014 2K26"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 700,
      letterSpacing: '-.035em',
      color: 'var(--text-strong)'
    }
  }, "Every model, one charge")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ['All', '50cc', 'Electric', 'Sport'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))',
      gap: 20
    }
  }, MODELS.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.id,
    elevation: "flat",
    interactive: true,
    padded: false,
    style: {
      padding: 16
    },
    onClick: () => go('product')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PH, {
    label: "Model photo",
    ratio: "4 / 3",
    radius: 12
  }), m.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      top: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: m.badge === 'New' ? 'accent' : 'solid'
  }, m.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '-.025em',
      color: 'var(--text-strong)'
    }
  }, m.name), /*#__PURE__*/React.createElement(MonoLabel, null, m.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, "\xA3", m.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    block: true,
    onClick: e => {
      e.stopPropagation();
      onAdd();
    }
  }, "Add to cart"))))));
}
function Product({
  go,
  onAdd
}) {
  const [tab, setTab] = React.useState('Specs');
  const [finish, setFinish] = React.useState('Chalk');
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 20px 80px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PH, {
    label: "C45 \u2014 primary view",
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, ['Detail 01', 'Detail 02', 'Detail 03'].map(l => /*#__PURE__*/React.createElement(PH, {
    key: l,
    label: l,
    ratio: "1 / 1",
    radius: 12
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MonoLabel, {
    rule: true
  }, "Ref. C45 / 50cc"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 700,
      letterSpacing: '-.04em',
      lineHeight: .98,
      color: 'var(--text-strong)'
    }
  }, "C45 Classic"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "ok"
  }, "In stock"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Free delivery")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '52ch',
      marginTop: 20
    }
  }, "Officially the UK's No.1 selling moped. Agile, quiet and ready to strike \u2014 built around a sealed 50cc-equivalent drivetrain with a two-hour charge."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '20px 0'
    }
  }, ['Chalk', 'Matte black', 'Signal red'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: finish === c,
    onClick: () => setFinish(c),
    style: {
      cursor: 'pointer'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      margin: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-.03em',
      color: 'var(--text-strong)'
    }
  }, "\xA32,290"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 18
    }),
    onClick: onAdd
  }, "Book now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('contact')
  }, "Test ride")), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Specs', 'Service', 'Delivery'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20
    }
  }, tab === 'Specs' && /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Weight',
      value: '92 kg'
    }, {
      label: 'Top speed',
      value: '45 km/h'
    }, {
      label: 'Range',
      value: '110 km'
    }, {
      label: 'Charge time',
      value: '2 h'
    }, {
      label: 'Battery',
      value: '60 V / 32 Ah'
    }, {
      label: 'Regen braking'
    }, {
      label: 'Keyless ignition'
    }]
  }), tab === 'Service' && /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Warranty',
      value: '36 months'
    }, {
      label: 'Service interval',
      value: '6000 km'
    }, {
      label: 'Board-level repair'
    }, {
      label: 'Courtesy vehicle'
    }]
  }), tab === 'Delivery' && /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Dispatch',
      value: '3–5 days'
    }, {
      label: 'Carrier',
      value: 'Imports 2K26'
    }, {
      label: 'Assembled on arrival'
    }]
  }))));
}
function Contact({
  go
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 20px 100px',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    rule: true
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 28px',
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      fontWeight: 700,
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: 'var(--text-strong)'
    }
  }, "Book a test ride"), /*#__PURE__*/React.createElement(Card, {
    elevation: "raised",
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Dam Albert"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    hint: "We reply within one working day"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@domain.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Model"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['C45 Classic', 'DB50QT Panther', 'NX2 City', 'R9 Sport']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred day"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Weekday morning', 'Weekday afternoon', 'Saturday']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      margin: '20px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I hold a valid licence",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Send service reminders"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => setSent(true)
  }, sent ? 'Request sent' : 'Request a ride')));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 20px',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, null, "Skot. \u2014 Imports"), /*#__PURE__*/React.createElement(MonoLabel, null, "2K26"), /*#__PURE__*/React.createElement(MonoLabel, null, "All rights reserved"));
}
Object.assign(window, {
  PH,
  TopNav,
  Hero,
  Collections,
  Product,
  Contact,
  Footer,
  MODELS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StorefrontParts.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MonoLabel = __ds_scope.MonoLabel;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
