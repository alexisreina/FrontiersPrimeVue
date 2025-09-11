import{definePreset as e}from"@primeuix/themes";import t from"@primeuix/themes/lara";import n from"@primeuix/themes/lara/autocomplete";import r from"@primeuix/themes/lara/badge";import i from"@primeuix/themes/lara/blockui";import a from"@primeuix/themes/lara/card";import o from"@primeuix/themes/lara/carousel";import s from"@primeuix/themes/lara/cascadeselect";import c from"@primeuix/themes/lara/colorpicker";import l from"@primeuix/themes/lara/confirmpopup";import u from"@primeuix/themes/lara/dataview";import d from"@primeuix/themes/lara/datepicker";import f from"@primeuix/themes/lara/divider";import p from"@primeuix/themes/lara/dock";import m from"@primeuix/themes/lara/drawer";import h from"@primeuix/themes/lara/editor";import g from"@primeuix/themes/lara/fieldset";import _ from"@primeuix/themes/lara/fileupload";import v from"@primeuix/themes/lara/galleria";import y from"@primeuix/themes/lara/iconfield";import b from"@primeuix/themes/lara/image";import x from"@primeuix/themes/lara/imagecompare";import S from"@primeuix/themes/lara/inlinemessage";import C from"@primeuix/themes/lara/inplace";import w from"@primeuix/themes/lara/inputchips";import T from"@primeuix/themes/lara/inputgroup";import E from"@primeuix/themes/lara/inputnumber";import D from"@primeuix/themes/lara/inputotp";import O from"@primeuix/themes/lara/knob";import k from"@primeuix/themes/lara/listbox";import A from"@primeuix/themes/lara/megamenu";import j from"@primeuix/themes/lara/menubar";import M from"@primeuix/themes/lara/metergroup";import N from"@primeuix/themes/lara/orderlist";import P from"@primeuix/themes/lara/organizationchart";import F from"@primeuix/themes/lara/overlaybadge";import I from"@primeuix/themes/lara/paginator";import L from"@primeuix/themes/lara/panel";import R from"@primeuix/themes/lara/panelmenu";import z from"@primeuix/themes/lara/password";import B from"@primeuix/themes/lara/picklist";import V from"@primeuix/themes/lara/popover";import H from"@primeuix/themes/lara/progressbar";import U from"@primeuix/themes/lara/rating";import W from"@primeuix/themes/lara/ripple";import G from"@primeuix/themes/lara/scrollpanel";import K from"@primeuix/themes/lara/selectbutton";import q from"@primeuix/themes/lara/skeleton";import J from"@primeuix/themes/lara/slider";import Y from"@primeuix/themes/lara/speeddial";import X from"@primeuix/themes/lara/splitbutton";import Z from"@primeuix/themes/lara/splitter";import Q from"@primeuix/themes/lara/stepper";import $ from"@primeuix/themes/lara/steps";import ee from"@primeuix/themes/lara/tabmenu";import te from"@primeuix/themes/lara/tabs";import ne from"@primeuix/themes/lara/tabview";import re from"@primeuix/themes/lara/terminal";import ie from"@primeuix/themes/lara/textarea";import ae from"@primeuix/themes/lara/timeline";import oe from"@primeuix/themes/lara/togglebutton";import se from"@primeuix/themes/lara/toolbar";import ce from"@primeuix/themes/lara/tree";import le from"@primeuix/themes/lara/treeselect";import ue from"@primeuix/themes/lara/treetable";import de from"@primeuix/themes/lara/virtualscroller";var fe={header:{color:`{surface.700}`,hoverColor:`{surface.900}`,activeColor:`{surface.900}`,activeHoverColor:`{surface.900}`,padding:`1.5rem 1rem 1.5rem 0`,fontWeight:`500`,borderRadius:`0`,borderWidth:`1px 0 0 0`,borderColor:`{surface.300}`,toggleIcon:{color:`{surface.700}`,hoverColor:`{surface.900}`,activeColor:`{surface.900}`,activeHoverColor:`{surface.900}`},first:{topBorderRadius:`0`,borderWidth:`1px 0 0 0`},last:{bottomBorderRadius:`0`,activeBottomBorderRadius:`0`}},content:{borderWidth:`0`,borderColor:`{surface.300}`,background:`transparent`,color:`{surface.900}`,padding:`0`},colorScheme:{light:{header:{background:`transparent`,hoverBackground:`transparent`,activeBackground:`transparent`,activeHoverBackground:`transparent`}},dark:{header:{background:`transparent`,hoverBackground:`transparent`,activeBackground:`transparent`,activeHoverBackground:`transparent`}}},css:({dt:e})=>`
  .p-accordionpanel:last-child {
    border-bottom: 1px solid ${e(`surface.300`)};
  }
`},pe=n,me={root:{width:`1.5rem`,height:`1.5rem`,fontSize:`0.875rem`,background:`transparent`,color:`{avatar.text.color}`,borderRadius:`{content.border.radius}`},icon:{size:`1rem`},group:{borderColor:`{content.background}`,offset:`-0.75rem`},lg:{width:`2.5rem`,height:`2.5rem`,fontSize:`1.25rem`,icon:{size:`1.5rem`},group:{offset:`-1rem`}},xl:{width:`3rem`,height:`3rem`,fontSize:`1.5rem`,icon:{size:`2rem`},group:{offset:`-1.5rem`}},css:({dt:e})=>`
.p-avatar:has(> .p-avatar-label){
    border: 1px solid ${e(`avatar.text.color`)};
  }

`},he=r,ge={primitive:{gray:{50:`#f7f7f7`,100:`#f0f0f0`,200:`#e6e6e6`,300:`#d5d5d5`,400:`#bfbfbf`,500:`#a2a2a2`,600:`#878787`,700:`#6b6b6b`,800:`#545454`,900:`#282828`,950:`#0c0c0c`},blue:{50:`#eef5ff`,100:`#cee1ff`,200:`#aecbff`,300:`#6d9efd`,400:`#3673f7`,500:`#0c4ded`,600:`#003bde`,700:`#002fca`,800:`#0024b0`,900:`#001991`,950:`#001959`},red:{50:`#fff3f3`,100:`#ffd6d7`,200:`#feb9bb`,300:`#fa8589`,400:`#f2575d`,500:`#e7323b`,600:`#d51a2c`,700:`#c91329`,800:`#9f0223`,900:`#7d0022`,950:`#59001e`},orange:{50:`#fff6ec`,100:`#ffedd5`,200:`#ffe4be`,300:`#ffcb8d`,400:`#ffb062`,500:`#ff8b33`,600:`#e56000`,700:`#d14900`,800:`#a93f0c`,900:`#822907`,950:`#591804`},purple:{50:`#f9f5ff`,100:`#efe4ff`,200:`#e4d3ff`,300:`#c6acff`,400:`#a589fa`,500:`#856df0`,600:`#6c51dc`,700:`#553cc2`,800:`#402ba3`,900:`#2d1d7f`,950:`#1d1359`},green:{50:`#f6fff7`,100:`#e5fae5`,200:`#bdf0bc`,300:`#96e392`,400:`#74d56d`,500:`#54c247`,600:`#459d3a`,700:`#228e3c`,800:`#2c8147`,900:`#287753`,950:`#1b5958`},cyan:{50:`#eefeff`,100:`#d3f8fa`,200:`#b8f2f5`,300:`#80e7ed`,400:`#42d6e0`,500:`#20bbc5`,600:`#1898a4`,700:`#058899`,800:`#04798b`,900:`#046379`,950:`#004659`}},semantic:{disabledOpacity:`0.5`,primary:{50:`{blue.50}`,100:`{blue.100}`,200:`{blue.200}`,300:`{blue.300}`,400:`{blue.400}`,500:`{blue.500}`,600:`{blue.600}`,700:`{blue.700}`,800:`{blue.800}`,900:`{blue.900}`,950:`{blue.950}`},overlay:{popover:{borderRadius:`{border.radius.lg}`,shadow:`{elevation.$light.bottom.20}`,padding:`1.5rem 1rem 1rem`},modal:{borderRadius:`{border.radius.lg}`,padding:`1.5rem`,shadow:`{elevation.$light.bottom.50}`}},list:{option:{padding:`1rem`},optionGroup:{padding:`1rem`,fontWeight:`300`}},navigation:{list:{padding:`0.5rem 0`,gap:`0`},item:{padding:`0.625rem 1rem`,borderRadius:`0`,gap:`0.5rem`},submenuLabel:{padding:`0.625rem 1rem`,fontWeight:`600`},submenuIcon:{size:`0.875rem`}},focusRing:{width:`0.125rem`,style:`solid`,color:`{blue.600}`,offset:`0.125rem`},formField:{paddingX:`1rem`,paddingY:`calc(0.625rem - 0.5px)`,sm:{fontSize:`0.875rem`,paddingX:`0.75rem`,paddingY:`0.5rem`},lg:{fontSize:`1.125rem`,paddingX:`1.125rem`,paddingY:`0.75rem`},focusRing:{width:`0.125rem`,style:`solid`,color:`{blue.600}`,offset:`0.125rem`,shadow:`none`}},contextMenu:{background:`#ffffff`,borderColor:`{surface.500}`,color:`{surface.500}`,borderRadius:`{content.border.radius}`,shadow:`{elevation.$light.bottom.40}`,listPadding:`0 0 0.25rem`,listGap:`0`,itemFocusBackground:`{surface.50}`,itemColor:`{surface.700}`,itemFocusColor:`{surface.900}`,itemPadding:`0.75rem 1rem`,itemBorderRadius:`0`,itemGap:`0.5rem`,itemIconColor:`{surface.700}`,itemIconFocusColor:`{surface.900}`,itemIconActiveColor:`{surface.900}`,submenuLabelPadding:`0.75rem 1rem 0.5rem`,submenuLabelFontWeight:`500`,submenuLabelBackground:`{surface.0}`,submenuLabelColor:`{surface.900}`,submenuLabelBorderBottom:`1px solid {surface.500}`,submenuLabelMarginBottom:`5px`,separatorBorderColor:`{surface.500}`,itemLinkFontWeight:`300`},colorScheme:{light:{surface:{0:`#ffffff`,50:`{gray.50}`,100:`{gray.100}`,200:`{gray.200}`,300:`{gray.300}`,400:`{gray.400}`,500:`{gray.500}`,600:`{gray.600}`,700:`{gray.700}`,800:`{gray.800}`,900:`{gray.900}`,950:`{gray.950}`},primary:{color:`{primary.600}`,contrastColor:`#ffffff`,hoverColor:`{primary.700}`,activeColor:`{primary.800}`},text:{color:`{surface.900}`,hoverColor:`{surface.800}`,mutedColor:`{surface.500}`,hoverMutedColor:`{surface.600}`,secondaryColor:`{surface.700}`},formField:{background:`{surface.0}`,disabledBackground:`{surface.0}`,filledBackground:`{surface.0}`,filledHoverBackground:`{surface.0}`,filledFocusBackground:`{surface.0}`,borderColor:`{surface.300}`,hoverBorderColor:`{surface.300}`,focusBorderColor:`{surface.300}`,invalidBorderColor:`{red.600}`,color:`{text.color}`,disabledColor:`{surface.300}`,placeholderColor:`{text.secondary.color}`,invalidPlaceholderColor:`{red.600}`,floatLabelColor:`{text.secondary.color}`,floatLabelFocusColor:`{text.secondary.color}`,floatLabelActiveColor:`{text.secondary.color}`,floatLabelInvalidColor:`{red.600}`},content:{borderColor:`{surface.300}`},list:{option:{focusBackground:`{surface.50}`,selectedBackground:`{surface.0}`,color:`{surface.700}`,focusColor:`{surface.900}`,selectedColor:`{surface.900}`,selectedFocusColor:`{surface.900}`,icon:{color:`{surface.700}`,focusColor:`{surface.900}`}}},input:{hoverBorderColor:`{form.field.border.color}`,checkedBackground:`{surface.900}`,checkedHoverBackground:`{surface.900}`,checkedBorderColor:`{surface.900}`,checkedHoverBorderColor:`{surface.900}`,checkedFocusBorderColor:`{surface.900}`,inputtextInvalidBackground:`{red.50}`},avatar:{textColor:`{surface.500}`},overlay:{select:{background:`{surface.0}`,borderColor:`{surface.300}`,color:`{text.color}`},popover:{background:`{surface.0}`,borderColor:`{surface.300}`,color:`{text.color}`},modal:{background:`{surface.0}`,borderColor:`{surface.300}`,color:`{text.color}`}},breadcrumb:{textColor:`{surface.800}`,backgroundHoverColor:`{gradient.$dark.16}`},navigation:{item:{focusBackground:`{surface.100}`,activeBackground:`{surface.100}`,color:`{text.color}`,focusColor:`{text.hover.color}`,activeColor:`{text.hover.color}`,icon:{color:`{surface.400}`,focusColor:`{surface.500}`,activeColor:`{surface.500}`}},submenuLabel:{background:`transparent`,color:`{text.color}`},submenuIcon:{color:`{surface.400}`,focusColor:`{surface.500}`,activeColor:`{surface.500}`}}},dark:{surface:{0:`#ffffff`,50:`{gray.50}`,100:`{gray.100}`,200:`{gray.200}`,300:`{gray.300}`,400:`{gray.400}`,500:`{gray.500}`,600:`{gray.600}`,700:`{gray.700}`,800:`{gray.800}`,900:`{gray.900}`,950:`{gray.950}`},formField:{background:`transparent`,disabledBackground:`transparent`,filledBackground:`transparent`,filledHoverBackground:`transparent`,filledFocusBackground:`transparent`,borderColor:`{surface.0}`,hoverBorderColor:`{surface.0}`,focusBorderColor:`{surface.0}`,invalidBorderColor:`{red.600}`,color:`{surface.0}`,disabledColor:`{surface.0}`,placeholderColor:`{surface.0}`,invalidPlaceholderColor:`{red.600}`,floatLabelColor:`{surface.0}`,floatLabelFocusColor:`{surface.0}`,floatLabelActiveColor:`{surface.0}`,floatLabelInvalidColor:`{red.600}`},avatar:{textColor:`{surface.0}`},input:{hoverBorderColor:`{form.field.border.color}`,checkedBackground:`{surface.0}`,checkedHoverBackground:`{surface.0}`,checkedBorderColor:`{surface.0}`,checkedHoverBorderColor:`{surface.0}`,checkedFocusBorderColor:`{surface.0}`,inputtextInvalidBackground:`rgba(159, 2, 35, 0.50)`},breadcrumb:{textColor:`{surface.0}`,backgroundHoverColor:`{gradient.$light.16}`}}}}},_e=i,ve={root:{padding:`1.25rem`,background:`transparent`,gap:`0rem`,transitionDuration:`{transition.duration}`},item:{color:`{breadcrumb.text.color}`,hoverColor:`{breadcrumb.text.color}`,borderRadius:`0.25rem`,icon:{color:`{breadcrumb.text.color}`,hoverColor:`{breadcrumb.text.color}`}},separator:{color:`{breadcrumb.text.color}`},css:({dt:e})=>`
.p-breadcrumb-item-link{
  padding: 0 0.25rem;
}
.p-breadcrumb-item-link:hover {
 background-color: ${e(`breadcrumb.background.hover.color`)};
}
.p-breadcrumb-item{
  font-size: 0.75rem;
}
.p-breadcrumb-separator-icon, .p-breadcrumb-item-icon {
 width: 0.75rem;
 height: 0.75rem;
 font-size: 0.75rem;
}
`},ye={root:{roundedBorderRadius:`3rem`,paddingY:`calc(0.75rem - 1px)`,paddingX:`1.5rem`,iconOnlyWidth:`2.5rem`,focusRing:{width:`1.25rem`,style:`solid`,offset:`1.25rem`},sm:{fontSize:`0.875rem`,paddingY:`calc(0.5rem - 1px)`,paddingX:`1rem`,iconOnlyWidth:`2rem`},lg:{fontSize:`1rem`,paddingX:`2rem`,paddingY:`calc(1rem - 1px)`,iconOnlyWidth:`3rem`},label:{fontWeight:`500`},raisedShadow:`{elevation.$light.bottom.30}`},colorScheme:{light:{root:{primary:{background:`{blue.600}`,hoverBackground:`{blue.800}`,activeBackground:`{blue.600}`,borderColor:`{blue.600}`,hoverBorderColor:`{blue.800}`,activeBorderColor:`{blue.600}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},secondary:{background:`{gray.900}`,hoverBackground:`{gray.950}`,activeBackground:`{gray.900}`,borderColor:`{gray.900}`,hoverBorderColor:`{gray.950}`,activeBorderColor:`{gray.900}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},info:{background:`{cyan.600}`,hoverBackground:`{cyan.800}`,activeBackground:`{cyan.600}`,borderColor:`{cyan.600}`,hoverBorderColor:`{cyan.800}`,activeBorderColor:`{cyan.600}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},success:{background:`{green.600}`,hoverBackground:`{green.800}`,activeBackground:`{green.600}`,borderColor:`{green.600}`,hoverBorderColor:`{green.800}`,activeBorderColor:`{green.600}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},warn:{background:`{orange.600}`,hoverBackground:`{orange.800}`,activeBackground:`{orange.600}`,borderColor:`{orange.600}`,hoverBorderColor:`{orange.800}`,activeBorderColor:`{orange.600}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},help:{background:`{purple.600}`,hoverBackground:`{purple.800}`,activeBackground:`{purple.600}`,borderColor:`{purple.600}`,hoverBorderColor:`{purple.800}`,activeBorderColor:`{purple.600}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},danger:{background:`{red.600}`,hoverBackground:`{red.800}`,activeBackground:`{red.600}`,borderColor:`{red.600}`,hoverBorderColor:`{red.800}`,activeBorderColor:`{red.600}`,color:`{surface.0}`,hoverColor:`{surface.0}`,activeColor:`{surface.0}`},contrast:{background:`{surface.0}`,hoverBackground:`rgba(255, 255, 255, 0.72)`,activeBackground:`{surface.0}`,borderColor:`{surface.0}`,hoverBorderColor:`rgba(255, 255, 255, 0.72)`,activeBorderColor:`{surface.0}`,color:`{gray.950}`,hoverColor:`{gray.950}`,activeColor:`{gray.950}`}},outlined:{primary:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{blue.600}`,color:`{blue.600}`},secondary:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{gray.900}`,color:`{gray.900}`},success:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{green.600}`,color:`{green.600}`},info:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{cyan.600}`,color:`{cyan.600}`},warn:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{orange.600}`,color:`{orange.600}`},help:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{purple.600}`,color:`{purple.600}`},danger:{hoverBackground:`{gradient.$dark.8}`,activeBackground:`transparent`,borderColor:`{red.600}`,color:`{red.600}`},contrast:{hoverBackground:`{gradient.$light.8}`,activeBackground:`transparent`,borderColor:`{surface.0}`,color:`{surface.0}`}},text:{primary:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{blue.600}`},secondary:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{gray.900}`},success:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{green.600}`},info:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{cyan.600}`},warn:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{orange.600}`},help:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{purple.600}`},danger:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{red.600}`},contrast:{hoverBackground:`transparent`,activeBackground:`transparent`,color:`{surface.0}`}},link:{color:`{primary.color}`,hoverColor:`{primary.color}`,activeColor:`{primary.color}`}}},css:({dt:e})=>`
  .p-button {
    line-height: 1rem;
  }
  .p-button-icon-only {
    padding-inline: 0.5rem;
  }
  .p-button-outlined:not(:disabled):hover {
    border-color: ${e(`button.primary.hoverBackground`)};
    color: ${e(`button.primary.hoverBackground`)};
  }
  .p-button-outlined.p-button-secondary:not(:disabled):hover {
    border-color: ${e(`button.secondary.hoverBackground`)};
    color: ${e(`button.secondary.hoverBackground`)};
  }
  .p-button-outlined.p-button-success:not(:disabled):hover {
    border-color: ${e(`button.success.hoverBackground`)};
    color: ${e(`button.success.hoverBackground`)};
  }
  .p-button-outlined.p-button-info:not(:disabled):hover {
    border-color: ${e(`button.info.hoverBackground`)};
    color: ${e(`button.info.hoverBackground`)};
  }
  .p-button-outlined.p-button-warn:not(:disabled):hover {
    border-color: ${e(`button.warn.hoverBackground`)};
    color: ${e(`button.warn.hoverBackground`)};
  }
  .p-button-outlined.p-button-help:not(:disabled):hover {
    border-color: ${e(`button.help.hoverBackground`)};
    color: ${e(`button.help.hoverBackground`)};
  }
  .p-button-outlined.p-button-danger:not(:disabled):hover {
    border-color: ${e(`button.danger.hoverBackground`)};
    color: ${e(`button.danger.hoverBackground`)};
  }
  .p-button-outlined.p-button-contrast:not(:disabled):hover {
    border-color: ${e(`button.contrast.hoverBackground`)};
    color: ${e(`button.contrast.hoverBackground`)};
  }
  .p-button-text:not(:disabled):hover {
    text-decoration: underline;
    color: ${e(`button.primary.hoverBackground`)};
  }
  .p-button-text.p-button-secondary:not(:disabled):hover {
    color: ${e(`button.secondary.hoverBackground`)};
  }
  .p-button-text.p-button-success:not(:disabled):hover {
    color: ${e(`button.success.hoverBackground`)};
  }
  .p-button-text.p-button-info:not(:disabled):hover {
    color: ${e(`button.info.hoverBackground`)};
  }
  .p-button-text.p-button-warn:not(:disabled):hover {
    color: ${e(`button.warn.hoverBackground`)};
  }
  .p-button-text.p-button-help:not(:disabled):hover {
    color: ${e(`button.help.hoverBackground`)};
  }
  .p-button-text.p-button-danger:not(:disabled):hover {
    color: ${e(`button.danger.hoverBackground`)};
  }
  .p-button-text.p-button-contrast:not(:disabled):hover {
    color: ${e(`button.contrast.hoverBackground`)};
  }
`},be=a,xe=o,Se=s,Ce={root:{hoverBorderColor:`{input.hover.border.color}`,checkedBackground:`{input.checked.background}`,checkedHoverBackground:`{input.checked.hover.background}`,checkedBorderColor:`{input.checked.border.color}`,checkedHoverBorderColor:`{input.checked.hover.border.color}`,checkedFocusBorderColor:`{input.checked.focus.border.color}`},icon:{size:`0.75rem`,sm:{size:`0.5rem`},lg:{size:`1rem`}}},we={root:{borderRadius:`3rem`,paddingX:`0.25rem`,paddingY:`0.25rem`,gap:`0`},image:{width:`1.5rem`,height:`1.5rem`},icon:{size:`1rem`},removeIcon:{size:`1rem`},colorScheme:{light:{root:{background:`{surface.800}`,color:`{surface.0}`},icon:{color:`{surface.0}`},removeIcon:{color:`{surface.0}`}},dark:{root:{background:`{surface.800}`,color:`{surface.0}`},icon:{color:`{surface.0}`},removeIcon:{color:`{surface.0}`}}},css:({dt:e})=>`
  .p-chip-icon {
    font-size: ${e(`chip.icon.size`)};
    line-height: 1;
    margin-inline-start: calc(var(--p-chip-padding-y) / 2);
  }
  .p-chip-label {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
    padding-inline: 0.75rem;
  }
  .p-chip-image {
    margin-inline-start: calc(-1 * var(--p-chip-padding-y) + var(--p-chip-padding-y) / 2);
  }
  .p-chip-remove-icon {
    margin-inline-end: calc(var(--p-chip-padding-y) / 2);
  }
`},Te=c,Ee={icon:{size:`1.5rem`}},De=l,Oe={root:{background:`{context.menu.background}`,borderColor:`{context.menu.border.color}`,color:`{context.menu.color}`,borderRadius:`{context.menu.border.radius}`,shadow:`{context.menu.shadow}`},list:{padding:`{context.menu.list.padding}`,gap:`{context.menu.list.gap}`},item:{focusBackground:`{context.menu.item.focus.background}`,activeBackground:`{context.menu.item.focus.background}`,color:`{context.menu.item.color}`,focusColor:`{context.menu.item.focus.color}`,activeColor:`{context.menu.item.focus.color}`,padding:`{context.menu.item.padding}`,borderRadius:`{context.menu.item.border.radius}`,gap:`{context.menu.item.gap}`,icon:{color:`{context.menu.item.icon.color}`,focusColor:`{context.menu.item.icon.focus.color}`,activeColor:`{context.menu.item.icon.focus.color}`}},submenuIcon:{size:`1rem`,color:`{context.menu.item.icon.color}`,focusColor:`{context.menu.item.icon.focus.color}`,activeColor:`{context.menu.item.icon.focus.color}`},separator:{borderColor:`{context.menu.separator.border.color}`},css:({dt:e})=>`
.p-contextmenu-submenu-label {
  border-bottom:  ${e(`{context.menu.separator.border.color}`)};
  margin-bottom: ${e(`{context.menu.separator.margin.bottom}`)};
}

.p-contextmenu-item-link{
  font-weight: ${e(`{context.menu.item.link.font.weight}`)};
}

.p-contextmenu-root-list:not(:has(> .p-contextmenu-submenu-label:first-child)) > .p-contextmenu-item:first-child .p-contextmenu-item-content {
  border-radius: ${e(`{{context.menu.border.radius}}`)} ${e(`{{context.menu.border.radius}}`)} 0 0;
`},ke={headerCell:{padding:`1rem`,sm:{padding:`0.75rem 1rem`},lg:{padding:`1.25rem 1rem`}},columnTitle:{fontWeight:`500`},bodyCell:{borderColor:`transparent`,padding:`1rem`,sm:{padding:`0.75rem 1rem`},lg:{padding:`1.25rem 1rem`}},columnFooter:{fontWeight:`500`},footerCell:{padding:`1rem`,sm:{padding:`0.75rem 1rem`},lg:{padding:`1.25rem 1rem`}},footer:{borderWidth:`1px 0 0 0`,padding:`1rem`,sm:{padding:`0.75rem 1rem`},lg:{padding:`1.25rem 1rem`}},colorScheme:{light:{root:{borderColor:`{content.border.color}`},header:{background:`{surface.0}`,color:`{text.color}`},headerCell:{background:`{surface.0}`,hoverBackground:`{surface.100}`,color:`{text.color}`},footer:{background:`{surface.0}`,color:`{text.color}`},footerCell:{background:`{surface.0}`,color:`{text.color}`},row:{stripedBackground:`{surface.50}`},bodyCell:{selectedBorderColor:`{primary.100}`}}},paginatorBottom:{borderWidth:`1px 0 0 0`},css:({dt:e})=>`
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-color: ${e(`datatable.border.color`)};
  }
`},Ae=u,je=d,Me={header:{padding:`2rem 1rem 2rem 2rem`,gap:`0.5rem`},title:{fontSize:`1.125rem`,fontWeight:`600`},content:{padding:`0.5rem 2rem 1.5rem`},footer:{padding:`1.5rem 2rem`,gap:`1rem`},css:({dt:e})=>`
  .p-dialog-header-actions {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .p-dialog-close-button > svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`},Ne=f,Pe=p,Fe=m,Ie=h,Le=g,Re=_,ze={root:{fontWeight:`300`,active:{fontSize:`0.625rem`,fontWeight:`300`}},in:{input:{paddingTop:`calc(1.125rem - 0.5px)`,paddingBottom:`0.375rem`},active:{top:`calc(0.375rem - 0.5px)`}}},Be=v,Ve=y,He={root:{top:`calc(0.375rem - 0.5px)`,fontSize:`0.625rem`,fontWeight:`300`},input:{paddingTop:`calc(1.125rem - 0.5px)`,paddingBottom:`0.375rem`}},Ue=b,We=x,Ge=S,Ke=C,qe=w,Je=T,Ye=E,Xe=D,Ze={css:({dt:e})=>`
  .p-inputtext:disabled {
    border-color: ${e(`surface.200`)};
  }
  .p-inputtext.p-variant-filled:disabled {
    background-color: ${e(`surface.50`)};
  }
  .p-inputtext.p-invalid, .p-inputtext.p-variant-filled.p-invalid, .p-inputtext.p-variant-filled.p-invalid:hover {
    background-color: ${e(`input.inputtextInvalidBackground`)};
    border-color: ${e(`red.600`)};
  }
`},Qe=O,$e=k,et=A,tt={root:{background:`{context.menu.background}`,borderColor:`{context.menu.border.color}`,color:`{context.menu.color}`,borderRadius:`{context.menu.border.radius}`,shadow:`{context.menu.shadow}`},list:{padding:`{context.menu.list.padding}`,gap:`{context.menu.list.gap}`},item:{focusBackground:`{context.menu.item.focus.background}`,color:`{context.menu.item.color}`,focusColor:`{context.menu.item.focus.color}`,padding:`{context.menu.item.padding}`,borderRadius:`{context.menu.item.border.radius}`,gap:`{context.menu.item.gap}`,icon:{color:`{context.menu.item.icon.color}`,focusColor:`{context.menu.item.icon.focus.color}`}},submenuLabel:{padding:`{context.menu.submenu.label.padding}`,fontWeight:`{context.menu.submenu.label.font.weight}`,background:`{context.menu.submenu.label.background}`,color:`{context.menu.submenu.label.color}`},separator:{borderColor:`{context.menu.separator.border.color}`},css:({dt:e})=>`
.p-menu-submenu-label {
  border-bottom: ${e(`{context.menu.submenu.label.border.bottom}`)};
  margin-bottom: ${e(`{context.menu.submenu.label.margin.bottom}`)};
}

.p-menu-item-link{
  font-weight: ${e(`{context.menu.item.link.font.weight}`)};
}
  .p-menu-list:not(:has(> .p-menu-submenu-label:first-child)) > .p-menu-item:first-child .p-menu-item-content {
  border-radius: ${e(`{{context.menu.border.radius}}`)} ${e(`{{context.menu.border.radius}}`)} 0 0;
}

`},nt=j,rt={root:{borderRadius:`0`,borderWidth:`1px`},content:{padding:`1rem 1.5rem`,gap:`0.5rem`,sm:{padding:`0.75rem 0.875rem`},lg:{padding:`1.125rem 1.625rem`}},colorScheme:{light:{info:{background:`{blue.50}`,borderColor:`{blue.300}`,color:`{surface.900}`,shadow:`none`,closeButton:{hoverBackground:`{blue.100}`,focusRing:{color:`{focus.ring.color}`,shadow:`0 0 0 0.2rem {blue.200}`}},outlined:{color:`{blue.600}`,borderColor:`{blue.600}`},simple:{color:`{blue.600}`}},success:{background:`{green.50}`,borderColor:`{green.300}`,color:`{surface.900}`,shadow:`none`,closeButton:{hoverBackground:`{green.100}`,focusRing:{color:`{focus.ring.color}`,shadow:`0 0 0 0.2rem {green.200}`}},outlined:{color:`{green.700}`,borderColor:`{green.600}`},simple:{color:`{green.700}`}},warn:{background:`{orange.50}`,borderColor:`{orange.300}`,color:`{surface.900}`,shadow:`none`,closeButton:{hoverBackground:`{orange.100}`,focusRing:{color:`{focus.ring.color}`,shadow:`0 0 0 0.2rem {orange.200}`}},outlined:{color:`{orange.600}`,borderColor:`{orange.600}`},simple:{color:`{orange.400}`}},error:{background:`{red.50}`,borderColor:`{red.300}`,color:`{surface.900}`,shadow:`none`,closeButton:{hoverBackground:`{red.100}`,focusRing:{color:`{focus.ring.color}`,shadow:`0 0 0 0.2rem {red.200}`}},outlined:{color:`{red.600}`,borderColor:`{red.600}`},simple:{color:`{red.600}`}},secondary:{background:`{surface.100}`,borderColor:`{surface.300}`,color:`{surface.800}`,shadow:`none`,closeButton:{hoverBackground:`{surface.200}`,focusRing:{color:`{focus.ring.color}`,shadow:`0 0 0 0.2rem {surface.200}`}},outlined:{color:`{surface.600}`,borderColor:`{surface.600}`},simple:{color:`{surface.500}`}},contrast:{background:`{surface.900}`,borderColor:`{surface.700}`,color:`{surface.0}`,shadow:`none`,closeButton:{hoverBackground:`{surface.800}`,focusRing:{color:`{focus.ring.color}`,shadow:`0 0 0 0.2rem {surface.400}`}},outlined:{color:`{surface.900}`,borderColor:`{surface.900}`},simple:{color:`{surface.900}`}}}},extend:{before:{borderWidth:`6px`,infoBackground:`{blue.600}`,successBackground:`{green.600}`,warnBackground:`{orange.600}`,errorBackground:`{red.600}`,secondaryBackground:`{surface.600}`,contrastBackground:`{surface.700}`}},css:({dt:e})=>`
  .p-message {
    position: relative;
  }
  .p-message::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: ${e(`message.before.borderWidth`)};
    height: 100%;
    outline: 1px solid;
  }
  .p-message-info::before {
    background-color: ${e(`message.before.colorScheme.info.background`)};
    outline-color: ${e(`message.before.colorScheme.info.background`)};
  }
  .p-message-success::before {
    background-color: ${e(`message.before.colorScheme.success.background`)};
    outline-color: ${e(`message.before.colorScheme.success.background`)};
  }
  .p-message-warn::before {
    background-color: ${e(`message.before.colorScheme.warn.background`)};
    outline-color: ${e(`message.before.colorScheme.warn.background`)};
  }
  .p-message-error::before {
    background-color: ${e(`message.before.colorScheme.error.background`)};
    outline-color: ${e(`message.before.colorScheme.error.background`)};
  }
  .p-message-secondary::before {
    background-color: ${e(`message.before.colorScheme.secondary.background`)};
    outline-color: ${e(`message.before.colorScheme.secondary.background`)};
  }
  .p-message-contrast::before {
    background-color: ${e(`message.before.colorScheme.contrast.background`)};
    outline-color: ${e(`message.before.colorScheme.contrast.background`)};
  }
  .p-message-simple::before, .p-message-outlined::before {
    content: none;
  }
`},it=M,at={css:({dt:e})=>`
 .p-multiselect-option[aria-selected="true"] {
 color:${e(`list.option.selectedColor`)};
`},ot=N,st=P,ct=F,lt=I,ut=L,dt=R,ft=z,pt=B,mt=V,ht=H,gt={colorScheme:{light:{root:{colorOne:`{primary.500}`,colorTwo:`{primary.500}`,colorThree:`{primary.500}`,colorFour:`{primary.500}`}},dark:{root:{colorOne:`{primary.400}`,colorTwo:`{primary.400}`,colorThree:`{primary.400}`,colorFour:`{primary.400}`}}}},_t={root:{hoverBorderColor:`{input.hoverBorderColor}`,checkedBackground:`{input.checked.background}`,checkedHoverBackground:`{input.checked.hover.background}`,checkedBorderColor:`{input.checked.border.color}`,checkedHoverBorderColor:`{input.checked.hover.border.color}`,checkedFocusBorderColor:`{input.checked.focus.border.color}`},icon:{size:`0.75rem`,sm:{size:`0.5rem`},lg:{size:`1rem`}}},vt=U,yt=W,bt=G,xt={css:({dt:e})=>`
 .p-select-option[aria-selected="true"], .p-select-option[aria-selected="true"] > .p-select-option-check-icon {
 color:${e(`list.option.selectedColor`)};
`},St=K,Ct=q,wt=J,Tt=Y,Et=X,Dt=Z,Ot=Q,kt=$,At=ee,jt=te,Mt=ne,Nt={root:{fontWeight:`400`},colorScheme:{light:{primary:{background:`{blue.300}`,color:`{text.color}`},secondary:{background:`{surface.200}`,color:`{text.color}`},success:{background:`{green.300}`,color:`{text.color}`},info:{background:`{cyan.300}`,color:`{text.color}`},warn:{background:`{orange.300}`,color:`{text.color}`},danger:{background:`{red.300}`,color:`{text.color}`},contrast:{background:`{purple.300}`,color:`{text.color}`}},dark:{primary:{background:`{blue.300}`,color:`{text.color}`},secondary:{background:`{surface.200}`,color:`{text.color}`},success:{background:`{green.300}`,color:`{text.color}`},info:{background:`{cyan.300}`,color:`{text.color}`},warn:{background:`{orange.300}`,color:`{text.color}`},danger:{background:`{red.300}`,color:`{text.color}`},contrast:{background:`{purple.300}`,color:`{text.color}`}}},css:`
  .p-tag {
    line-height: 1rem;
  }
`},Pt=re,Ft=ie,It={root:{background:`{context.menu.background}`,borderColor:`{context.menu.border.color}`,color:`{context.menu.color}`,borderRadius:`{context.menu.border.radius}`,shadow:`{context.menu.shadow}`},list:{padding:`{context.menu.list.padding}`,gap:`{context.menu.list.gap}`},item:{focusBackground:`{context.menu.item.focus.background}`,activeBackground:`{context.menu.item.focus.background}`,color:`{context.menu.item.color}`,focusColor:`{context.menu.item.focus.color}`,activeColor:`{context.menu.item.focus.color}`,padding:`{context.menu.item.padding}`,borderRadius:`{context.menu.item.border.radius}`,gap:`{context.menu.item.gap}`,icon:{color:`{context.menu.item.icon.color}`,focusColor:`{context.menu.item.icon.focus.color}`,activeColor:`{context.menu.item.icon.focus.color}`}},submenuIcon:{size:`1rem`,color:`{context.menu.item.icon.color}`,focusColor:`{context.menu.item.icon.focus.color}`,activeColor:`{context.menu.item.icon.focus.color}`},separator:{borderColor:`{context.menu.separator.border.color}`},css:({dt:e})=>`
.p-tieredmenu-submenu-label {
  border-bottom:  ${e(`{context.menu.separator.border.color}`)};
  margin-bottom: ${e(`{context.menu.separator.margin.bottom}`)};
}

.p-tieredmenu-item-link{
   font-weight: ${e(`{context.menu.item.link.font.weight}`)};
}
.p-tieredmenu-root-list:not(:has(> .p-tieredmenu-submenu-label:first-child)) > .p-tieredmenu-item:first-child .p-tieredmenu-item-content {
  border-radius: ${e(`{{context.menu.border.radius}}`)} ${e(`{{context.menu.border.radius}}`)} 0 0;
`},Lt=ae,Rt={root:{borderWidth:`1px 1px 1px 8px`},content:{padding:`1rem`},detail:{fontWeight:`300`,fontSize:`1rem`},colorScheme:{light:{root:{blur:`0px`},info:{background:`{surface.900}`,borderColor:`{blue.300}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{blue.100}`,focusRing:{shadow:`0 0 0 0.2rem {blue.200}`}}},success:{background:`{surface.900}`,borderColor:`{green.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{green.100}`,focusRing:{shadow:`0 0 0 0.2rem {green.200}`}}},warn:{background:`{surface.900}`,borderColor:`{orange.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{orange.100}`,focusRing:{shadow:`0 0 0 0.2rem {orange.200}`}}},error:{background:`{surface.900}`,borderColor:`{red.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{red.100}`,focusRing:{shadow:`0 0 0 0.2rem {red.200}`}}},secondary:{background:`{surface.900}`,borderColor:`{surface.900}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{surface.800}`,focusRing:{shadow:`0 0 0 0.2rem {surface.400}`}}},contrast:{background:`{surface.900}`,borderColor:`{purple.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{purple.100}`,focusRing:{shadow:`0 0 0 0.2rem {purple.200}`}}}},dark:{root:{blur:`0px`},info:{background:`{surface.900}`,borderColor:`{blue.300}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{blue.100}`,focusRing:{shadow:`0 0 0 0.2rem {blue.200}`}}},success:{background:`{surface.900}`,borderColor:`{green.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{green.100}`,focusRing:{shadow:`0 0 0 0.2rem {green.200}`}}},warn:{background:`{surface.900}`,borderColor:`{orange.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{orange.100}`,focusRing:{shadow:`0 0 0 0.2rem {orange.200}`}}},error:{background:`{surface.900}`,borderColor:`{red.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{red.100}`,focusRing:{shadow:`0 0 0 0.2rem {red.200}`}}},secondary:{background:`{surface.900}`,borderColor:`{surface.900}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{surface.800}`,focusRing:{shadow:`0 0 0 0.2rem {surface.400}`}}},contrast:{background:`{surface.900}`,borderColor:`{purple.400}`,color:`{surface.0}`,detailColor:`{surface.0}`,shadow:`{elevation.$light.bottom.30}`,closeButton:{hoverBackground:`{purple.100}`,focusRing:{shadow:`0 0 0 0.2rem {purple.200}`}}}}},css:({dt:e})=>`
  .p-toast-message-info .p-toast-message-icon {
    color: ${e(`toast.info.border.color`)};
  }
  .p-toast-message-success .p-toast-message-icon {
    color: ${e(`toast.success.border.color`)};
  }
  .p-toast-message-warn .p-toast-message-icon {
    color: ${e(`toast.warn.border.color`)};
  }
  .p-toast-message-error .p-toast-message-icon {
    color: ${e(`toast.error.border.color`)};
  }
  .p-toast-message-contrast .p-toast-message-icon {
    color: ${e(`toast.contrast.border.color`)};
  }
`},zt=oe,Bt={root:{width:`2.625rem`,height:`1.5rem`,borderRadius:`2.625rem`,gap:`0.125rem`},colorScheme:{light:{root:{background:`{surface.500}`,hoverBackground:`{surface.500}`,checkedBackground:`{surface.900}`,checkedHoverBackground:`{surface.900}`,disabledBackground:`{surface.300}`},handle:{disabledBackground:`{surface.100}`}},dark:{root:{background:`{surface.600}`,disabledBackground:`{surface.600}`,hoverBackground:`{surface.600}`,checkedBackground:`{surface.0}`,checkedHoverBackground:`{surface.0}`},handle:{background:`{surface.900}`,disabledBackground:`{surface.500}`,hoverBackground:`{surface.900}`,checkedBackground:`{surface.900}`,checkedHoverBackground:`{surface.900}`,color:`{surface.900}`,hoverColor:`{surface.900}`,checkedColor:`{surface.900}`,checkedHoverColor:`{surface.900}`}}}},Vt=se,Ht={root:{maxWidth:`18rem`,gutter:`0.25rem`,padding:`0.65rem 0.5rem`,borderRadius:`{border.radius.xs}`},colorScheme:{light:{root:{background:`{surface.900}`,color:`{surface.0}`}},dark:{root:{background:`{surface.700}`,color:`{surface.0}`}}}},Ut=ce,Wt=le,Gt=ue,Kt=de,qt=e(t,{...ge,components:{accordion:fe,autocomplete:pe,avatar:me,badge:he,blockui:_e,breadcrumb:ve,button:ye,card:be,carousel:xe,cascadeselect:Se,checkbox:Ce,chip:we,colorpicker:Te,confirmdialog:Ee,confirmpopup:De,contextmenu:Oe,datatable:ke,dataview:Ae,datepicker:je,dialog:Me,divider:Ne,dock:Pe,drawer:Fe,editor:Ie,fieldset:Le,fileupload:Re,floatlabel:ze,galleria:Be,iconfield:Ve,iftalabel:He,image:Ue,imagecompare:We,inlinemessage:Ge,inplace:Ke,inputchips:qe,inputgroup:Je,inputnumber:Ye,inputotp:Xe,inputtext:Ze,knob:Qe,listbox:$e,megamenu:et,menu:tt,menubar:nt,message:rt,metergroup:it,multiselect:at,orderlist:ot,organizationchart:st,overlaybadge:ct,paginator:lt,panel:ut,panelmenu:dt,password:ft,picklist:pt,popover:mt,progressbar:ht,progressspinner:gt,radiobutton:_t,rating:vt,ripple:yt,scrollpanel:bt,select:xt,selectbutton:St,skeleton:Ct,slider:wt,speeddial:Tt,splitbutton:Et,splitter:Dt,stepper:Ot,steps:kt,tabmenu:At,tabs:jt,tabview:Mt,tag:Nt,terminal:Pt,textarea:Ft,tieredmenu:It,timeline:Lt,toast:Rt,togglebutton:zt,toggleswitch:Bt,toolbar:Vt,tooltip:Ht,tree:Ut,treeselect:Wt,treetable:Gt,virtualscroller:Kt},extend:{gradient:{$light:{4:`rgba(255, 255, 255, 0.04)`,8:`rgba(255, 255, 255, 0.08)`,16:`rgba(255, 255, 255, 0.16)`,24:`rgba(255, 255, 255, 0.24)`,40:`rgba(255, 255, 255, 0.40)`,56:`rgba(255, 255, 255, 0.56)`,60:`rgba(255, 255, 255, 0.60)`,72:`rgba(255, 255, 255, 0.72)`,80:`rgba(255, 255, 255, 0.80)`},$dark:{4:`rgba(40, 40, 40, 0.04)`,8:`rgba(40, 40, 40, 0.08)`,16:`rgba(40, 40, 40, 0.16)`,24:`rgba(40, 40, 40, 0.24)`,40:`rgba(40, 40, 40, 0.40)`,56:`rgba(40, 40, 40, 0.56)`,60:`rgba(40, 40, 40, 0.60)`,72:`rgba(40, 40, 40, 0.72)`,80:`rgba(40, 40, 40, 0.80)`}},elevation:{$light:{top:{10:`0 -1px 3px rgba(40, 40, 40, 0.04), 0 -1px 1px rgba(40, 40, 40, 0.08), 0 -1px 2px rgba(40, 40, 40, 0.12)`,20:`0 -2px 4px rgba(40, 40, 40, 0.04), 0 -1px 10px rgba(40, 40, 40, 0.08), 0 -4px 5px rgba(40, 40, 40, 0.12)`,30:`0 -5px 5px rgba(40, 40, 40, 0.04), 0 -3px 14px rgba(40, 40, 40, 0.08), 0 -8px 10px rgba(40, 40, 40, 0.12)`,40:`0 -7px 8px rgba(40, 40, 40, 0.04), 0 -5px 22px rgba(40, 40, 40, 0.08), 0 -12px 17px rgba(40, 40, 40, 0.12)`,50:`0 -11px 15px rgba(40, 40, 40, 0.04), 0 -9px 46px rgba(40, 40, 40, 0.08), 0 -24px 38px rgba(40, 40, 40, 0.12)`},center:{10:`0 0 3px rgba(40, 40, 40, 0.04), 0 0 1px rgba(40, 40, 40, 0.08), 0 0 2px rgba(40, 40, 40, 0.12)`,20:`0 0 4px rgba(40, 40, 40, 0.04), 0 0 10px rgba(40, 40, 40, 0.08), 0 0 5px rgba(40, 40, 40, 0.12)`,30:`0 0 5px rgba(40, 40, 40, 0.04), 0 0 14px rgba(40, 40, 40, 0.08), 0 0 10px rgba(40, 40, 40, 0.12)`,40:`0 0 8px rgba(40, 40, 40, 0.04), 0 0 22px rgba(40, 40, 40, 0.08), 0 0 17px rgba(40, 40, 40, 0.12)`,50:`0 0 15px rgba(40, 40, 40, 0.04), 0 0 46px rgba(40, 40, 40, 0.08), 0 0 38px rgba(40, 40, 40, 0.12)`},bottom:{10:`0 1px 3px rgba(40, 40, 40, 0.04), 0 2px 1px rgba(40, 40, 40, 0.08), 0 1px 2px rgba(40, 40, 40, 0.12)`,20:`0 2px 4px rgba(40, 40, 40, 0.04), 0 1px 10px rgba(40, 40, 40, 0.08), 0 4px 5px rgba(40, 40, 40, 0.12)`,30:`0 5px 5px rgba(40, 40, 40, 0.04), 0 3px 14px rgba(40, 40, 40, 0.08), 0 8px 10px rgba(40, 40, 40, 0.12)`,40:`0 7px 8px rgba(40, 40, 40, 0.04), 0 5px 22px rgba(40, 40, 40, 0.08), 0 12px 17px rgba(40, 40, 40, 0.12)`,50:`0 11px 15px rgba(40, 40, 40, 0.04), 0 9px 46px rgba(40, 40, 40, 0.08), 0 24px 38px rgba(40, 40, 40, 0.12)`},right:{10:`1px 0 3px 0 rgba(40, 40, 40, 0.04), 2px 0 1px 0 rgba(40, 40, 40, 0.08), 1px 0 2px 0 rgba(40, 40, 40, 0.12)`,20:`2px 0 4px 0 rgba(40, 40, 40, 0.04), 1px 0 10px 0 rgba(40, 40, 40, 0.08), 4px 0 5px 0 rgba(40, 40, 40, 0.12)`,30:`5px 0 5px 0 rgba(40, 40, 40, 0.04), 3px 0 14px 0 rgba(40, 40, 40, 0.08), 8px 4px 10px 0 rgba(40, 40, 40, 0.12)`,40:`7px 0 8px 0 rgba(40, 40, 40, 0.04), 5px 0 22px 0 rgba(40, 40, 40, 0.08), 12px 0 17px 0 rgba(40, 40, 40, 0.12)`,50:`11px 0 15px 0 rgba(40, 40, 40, 0.04), 9px 0 46px 0 rgba(40, 40, 40, 0.08), 24px 0 38px 0 rgba(40, 40, 40, 0.12)`},left:{10:`-1px 0 3px 0 rgba(40, 40, 40, 0.04), -2px 0 1px 0 rgba(40, 40, 40, 0.08), -1px 0 2px 0 rgba(40, 40, 40, 0.12)`,20:`-2px 0 4px 0 rgba(40, 40, 40, 0.04), -1px 0 10px 0 rgba(40, 40, 40, 0.08), -4px 0 5px 0 rgba(40, 40, 40, 0.12)`,30:`-5px 0 5px 0 rgba(40, 40, 40, 0.04), -3px 0 14px 0 rgba(40, 40, 40, 0.08), -8px 4px 10px 0 rgba(40, 40, 40, 0.12)`,40:`-7px 0 8px 0 rgba(40, 40, 40, 0.04), -5px 0 22px 0 rgba(40, 40, 40, 0.08), -12px 0 17px 0 rgba(40, 40, 40, 0.12)`,50:`-11px 0 15px 0 rgba(40, 40, 40, 0.04), -9px 0 46px 0 rgba(40, 40, 40, 0.08), -24px 0 38px 0 rgba(40, 40, 40, 0.12)`}},$dark:{top:{10:`0 -1px 3px rgba(40, 40, 40, 0.08), 0 -1px 1px rgba(40, 40, 40, 0.16), 0 -1px 2px rgba(40, 40, 40, 0.24)`,20:`0 -2px 4px rgba(40, 40, 40, 0.08), 0 -1px 10px rgba(40, 40, 40, 0.16), 0 -4px 5px rgba(40, 40, 40, 0.24)`,30:`0 -5px 5px rgba(40, 40, 40, 0.08), 0 -3px 14px rgba(40, 40, 40, 0.16), 0 -8px 10px rgba(40, 40, 40, 0.24)`,40:`0 -7px 8px rgba(40, 40, 40, 0.08), 0 -5px 22px rgba(40, 40, 40, 0.16), 0 -12px 17px rgba(40, 40, 40, 0.24)`,50:`0 -11px 15px rgba(40, 40, 40, 0.08), 0 -9px 46px rgba(40, 40, 40, 0.16), 0 -24px 38px rgba(40, 40, 40, 0.24)`},center:{10:`0 0 3px rgba(40, 40, 40, 0.08), 0 0 1px rgba(40, 40, 40, 0.16), 0 0 2px rgba(40, 40, 40, 0.24)`,20:`0 0 4px rgba(40, 40, 40, 0.08), 0 0 10px rgba(40, 40, 40, 0.16), 0 0 5px rgba(40, 40, 40, 0.24)`,30:`0 0 5px rgba(40, 40, 40, 0.08), 0 0 14px rgba(40, 40, 40, 0.16), 0 0 10px rgba(40, 40, 40, 0.24)`,40:`0 0 8px rgba(40, 40, 40, 0.08), 0 0 22px rgba(40, 40, 40, 0.16), 0 0 17px rgba(40, 40, 40, 0.24)`,50:`0 0 15px rgba(40, 40, 40, 0.08), 0 0 46px rgba(40, 40, 40, 0.16), 0 0 38px rgba(40, 40, 40, 0.24)`},bottom:{10:`0 1px 3px rgba(40, 40, 40, 0.08), 0 2px 1px rgba(40, 40, 40, 0.16), 0 1px 3px rgba(40, 40, 40, 0.24)`,20:`0 2px 4px rgba(40, 40, 40, 0.08), 0 1px 10px rgba(40, 40, 40, 0.16), 0 4px 5px rgba(40, 40, 40, 0.24)`,30:`0 5px 5px rgba(40, 40, 40, 0.08), 0 3px 14px rgba(40, 40, 40, 0.16), 0 8px 10px rgba(40, 40, 40, 0.24)`,40:`0 7px 8px rgba(40, 40, 40, 0.08), 0 5px 22px rgba(40, 40, 40, 0.16), 0 12px 17px rgba(40, 40, 40, 0.24)`,50:`0 11px 15px rgba(40, 40, 40, 0.08), 0 9px 46px rgba(40, 40, 40, 0.16), 0 24px 38px rgba(40, 40, 40, 0.24)`},right:{10:`1px 0 3px 0 rgba(40, 40, 40, 0.08), 2px 0 1px 0 rgba(40, 40, 40, 0.16), 1px 0 2px 0 rgba(40, 40, 40, 0.24)`,20:`2px 0 4px 0 rgba(40, 40, 40, 0.08), 1px 0 10px 0 rgba(40, 40, 40, 0.16), 4px 0 5px 0 rgba(40, 40, 40, 0.24)`,30:`5px 0 5px 0 rgba(40, 40, 40, 0.08), 3px 0 14px 0 rgba(40, 40, 40, 0.16), 8px 0 10px 0 rgba(40, 40, 40, 0.24)`,40:`7px 0 8px 0 rgba(40, 40, 40, 0.08), 5px 0 22px 0 rgba(40, 40, 40, 0.16), 12px 0 17px 0 rgba(40, 40, 40, 0.24)`,50:`11px 0 15px 0 rgba(40, 40, 40, 0.08), 9px 0 46px 0 rgba(40, 40, 40, 0.16), 24px 0 38px 0 rgba(40, 40, 40, 0.24)`},left:{10:`-1px 0 3px 0 rgba(40, 40, 40, 0.08), -2px 0 1px 0 rgba(40, 40, 40, 0.16), -1px 0 2px 0 rgba(40, 40, 40, 0.24)`,20:`-2px 0 4px 0 rgba(40, 40, 40, 0.08), -1px 0 10px 0 rgba(40, 40, 40, 0.16), -4px 0 5px 0 rgba(40, 40, 40, 0.24)`,30:`-5px 0 5px 0 rgba(40, 40, 40, 0.08), -3px 0 14px 0 rgba(40, 40, 40, 0.16), -8px 0 10px 0 rgba(40, 40, 40, 0.24)`,40:`-7px 0 8px 0 rgba(40, 40, 40, 0.08), -5px 0 22px 0 rgba(40, 40, 40, 0.16), -12px 0 17px 0 rgba(40, 40, 40, 0.24)`,50:`-11px 0 15px 0 rgba(40, 40, 40, 0.08), -9px 0 46px 0 rgba(40, 40, 40, 0.16), -24px 0 38px 0 rgba(40, 40, 40, 0.24)`}}}},css:({dt:e})=>`
    input:not([type="hidden"]),
    input:not([type="checkbox"]),
    input:not([type="radio"]),
    input:not([type="range"]) {
      line-height: 1
    }
  `});export{qt as default};
//# sourceMappingURL=index.js.map