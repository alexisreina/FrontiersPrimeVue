import { definePreset } from "@primeuix/themes"
import Lara from "@primeuix/themes/lara"

import accordion from "./components/accordion.js"
import autocomplete from "./components/autocomplete.js"
import avatar from "./components/avatar.js"
import badge from "./components/badge.js"
import base from "./components/base.js"
import blockui from "./components/blockui.js"
import breadcrumb from "./components/breadcrumb.js"
import button from "./components/button.js"
import card from "./components/card.js"
import carousel from "./components/carousel.js"
import cascadeselect from "./components/cascadeselect.js"
import checkbox from "./components/checkbox.js"
import chip from "./components/chip.js"
import colorpicker from "./components/colorpicker.js"
import confirmdialog from "./components/confirmdialog.js"
import confirmpopup from "./components/confirmpopup.js"
import contextmenu from "./components/contextmenu.js"
import datatable from "./components/datatable.js"
import dataview from "./components/dataview.js"
import datepicker from "./components/datepicker.js"
import dialog from "./components/dialog.js"
import divider from "./components/divider.js"
import dock from "./components/dock.js"
import drawer from "./components/drawer.js"
import editor from "./components/editor.js"
import fieldset from "./components/fieldset.js"
import fileupload from "./components/fileupload.js"
import floatlabel from "./components/floatlabel.js"
import galleria from "./components/galleria.js"
import iconfield from "./components/iconfield.js"
import iftalabel from "./components/iftalabel.js"
import image from "./components/image.js"
import imagecompare from "./components/imagecompare.js"
import inlinemessage from "./components/inlinemessage.js"
import inplace from "./components/inplace.js"
import inputchips from "./components/inputchips.js"
import inputgroup from "./components/inputgroup.js"
import inputnumber from "./components/inputnumber.js"
import inputotp from "./components/inputotp.js"
import inputtext from "./components/inputtext.js"
import knob from "./components/knob.js"
import listbox from "./components/listbox.js"
import megamenu from "./components/megamenu.js"
import menu from "./components/menu.js"
import menubar from "./components/menubar.js"
import message from "./components/message.js"
import metergroup from "./components/metergroup.js"
import multiselect from "./components/multiselect.js"
import orderlist from "./components/orderlist.js"
import organizationchart from "./components/organizationchart.js"
import overlaybadge from "./components/overlaybadge.js"
import paginator from "./components/paginator.js"
import panel from "./components/panel.js"
import panelmenu from "./components/panelmenu.js"
import password from "./components/password.js"
import picklist from "./components/picklist.js"
import popover from "./components/popover.js"
import progressbar from "./components/progressbar.js"
import progressspinner from "./components/progressspinner.js"
import radiobutton from "./components/radiobutton.js"
import rating from "./components/rating.js"
import ripple from "./components/ripple.js"
import scrollpanel from "./components/scrollpanel.js"
import select from "./components/select.js"
import selectbutton from "./components/selectbutton.js"
import skeleton from "./components/skeleton.js"
import slider from "./components/slider.js"
import speeddial from "./components/speeddial.js"
import splitbutton from "./components/splitbutton.js"
import splitter from "./components/splitter.js"
import stepper from "./components/stepper.js"
import steps from "./components/steps.js"
import tabmenu from "./components/tabmenu.js"
import tabs from "./components/tabs.js"
import tabview from "./components/tabview.js"
import tag from "./components/tag.js"
import terminal from "./components/terminal.js"
import textarea from "./components/textarea.js"
import tieredmenu from "./components/tieredmenu.js"
import timeline from "./components/timeline.js"
import toast from "./components/toast.js"
import togglebutton from "./components/togglebutton.js"
import toggleswitch from "./components/toggleswitch.js"
import toolbar from "./components/toolbar.js"
import tooltip from "./components/tooltip.js"
import tree from "./components/tree.js"
import treeselect from "./components/treeselect.js"
import treetable from "./components/treetable.js"
import virtualscroller from "./components/virtualscroller.js"

export default definePreset(Lara, {
  ...base,
  components: {
    accordion,
    autocomplete,
    avatar,
    badge,
    blockui,
    breadcrumb,
    button,
    card,
    carousel,
    cascadeselect,
    checkbox,
    chip,
    colorpicker,
    confirmdialog,
    confirmpopup,
    contextmenu,
    datatable,
    dataview,
    datepicker,
    dialog,
    divider,
    dock,
    drawer,
    editor,
    fieldset,
    fileupload,
    floatlabel,
    galleria,
    iconfield,
    iftalabel,
    image,
    imagecompare,
    inlinemessage,
    inplace,
    inputchips,
    inputgroup,
    inputnumber,
    inputotp,
    inputtext,
    knob,
    listbox,
    megamenu,
    menu,
    menubar,
    message,
    metergroup,
    multiselect,
    orderlist,
    organizationchart,
    overlaybadge,
    paginator,
    panel,
    panelmenu,
    password,
    picklist,
    popover,
    progressbar,
    progressspinner,
    radiobutton,
    rating,
    ripple,
    scrollpanel,
    select,
    selectbutton,
    skeleton,
    slider,
    speeddial,
    splitbutton,
    splitter,
    stepper,
    steps,
    tabmenu,
    tabs,
    tabview,
    tag,
    terminal,
    textarea,
    tieredmenu,
    timeline,
    toast,
    togglebutton,
    toggleswitch,
    toolbar,
    tooltip,
    tree,
    treeselect,
    treetable,
    virtualscroller,
  },
  extend: {
    gradient: {
      light: {
        4: "rgba(255, 255, 255, 0.04)",
        8: "rgba(255, 255, 255, 0.08)",
        16: "rgba(255, 255, 255, 0.16)",
        24: "rgba(255, 255, 255, 0.24)",
        40: "rgba(255, 255, 255, 0.40)",
        56: "rgba(255, 255, 255, 0.56)",
        60: "rgba(255, 255, 255, 0.60)",
        72: "rgba(255, 255, 255, 0.72)",
        80: "rgba(255, 255, 255, 0.80)",
      },
      dark: {
        4: "rgba(40, 40, 40, 0.04)",
        8: "rgba(40, 40, 40, 0.08)",
        16: "rgba(40, 40, 40, 0.16)",
        24: "rgba(40, 40, 40, 0.24)",
        40: "rgba(40, 40, 40, 0.40)",
        56: "rgba(40, 40, 40, 0.56)",
        60: "rgba(40, 40, 40, 0.60)",
        72: "rgba(40, 40, 40, 0.72)",
        80: "rgba(40, 40, 40, 0.80)",
      },
    },
    elevation: {
      light: {
        top: {
          10: "0 -1px 3px rgba(40, 40, 40, 0.04), 0 -1px 1px rgba(40, 40, 40, 0.08), 0 -1px 2px rgba(40, 40, 40, 0.12)",
          20: "0 -2px 4px rgba(40, 40, 40, 0.04), 0 -1px 10px rgba(40, 40, 40, 0.08), 0 -4px 5px rgba(40, 40, 40, 0.12)",
          30: "0 -5px 5px rgba(40, 40, 40, 0.04), 0 -3px 14px rgba(40, 40, 40, 0.08), 0 -8px 10px rgba(40, 40, 40, 0.12)",
          40: "0 -7px 8px rgba(40, 40, 40, 0.04), 0 -5px 22px rgba(40, 40, 40, 0.08), 0 -12px 17px rgba(40, 40, 40, 0.12)",
          50: "0 -11px 15px rgba(40, 40, 40, 0.04), 0 -9px 46px rgba(40, 40, 40, 0.08), 0 -24px 38px rgba(40, 40, 40, 0.12)",
        },
        center: {
          10: "0 0 3px rgba(40, 40, 40, 0.04), 0 0 1px rgba(40, 40, 40, 0.08), 0 0 2px rgba(40, 40, 40, 0.12)",
          20: "0 0 4px rgba(40, 40, 40, 0.04), 0 0 10px rgba(40, 40, 40, 0.08), 0 0 5px rgba(40, 40, 40, 0.12)",
          30: "0 0 5px rgba(40, 40, 40, 0.04), 0 0 14px rgba(40, 40, 40, 0.08), 0 0 10px rgba(40, 40, 40, 0.12)",
          40: "0 0 8px rgba(40, 40, 40, 0.04), 0 0 22px rgba(40, 40, 40, 0.08), 0 0 17px rgba(40, 40, 40, 0.12)",
          50: "0 0 15px rgba(40, 40, 40, 0.04), 0 0 46px rgba(40, 40, 40, 0.08), 0 0 38px rgba(40, 40, 40, 0.12)",
        },
        bottom: {
          10: "0 1px 3px rgba(40, 40, 40, 0.04), 0 2px 1px rgba(40, 40, 40, 0.08), 0 1px 2px rgba(40, 40, 40, 0.12)",
          20: "0 2px 4px rgba(40, 40, 40, 0.04), 0 1px 10px rgba(40, 40, 40, 0.08), 0 4px 5px rgba(40, 40, 40, 0.12)",
          30: "0 5px 5px rgba(40, 40, 40, 0.04), 0 3px 14px rgba(40, 40, 40, 0.08), 0 8px 10px rgba(40, 40, 40, 0.12)",
          40: "0 7px 8px rgba(40, 40, 40, 0.04), 0 5px 22px rgba(40, 40, 40, 0.08), 0 12px 17px rgba(40, 40, 40, 0.12)",
          50: "0 11px 15px rgba(40, 40, 40, 0.04), 0 9px 46px rgba(40, 40, 40, 0.08), 0 24px 38px rgba(40, 40, 40, 0.12)",
        },
        right: {
          10: "1px 0 3px 0 rgba(40, 40, 40, 0.04), 2px 0 1px 0 rgba(40, 40, 40, 0.08), 1px 0 2px 0 rgba(40, 40, 40, 0.12)",
          20: "2px 0 4px 0 rgba(40, 40, 40, 0.04), 1px 0 10px 0 rgba(40, 40, 40, 0.08), 4px 0 5px 0 rgba(40, 40, 40, 0.12)",
          30: "5px 0 5px 0 rgba(40, 40, 40, 0.04), 3px 0 14px 0 rgba(40, 40, 40, 0.08), 8px 4px 10px 0 rgba(40, 40, 40, 0.12)",
          40: "7px 0 8px 0 rgba(40, 40, 40, 0.04), 5px 0 22px 0 rgba(40, 40, 40, 0.08), 12px 0 17px 0 rgba(40, 40, 40, 0.12)",
          50: "11px 0 15px 0 rgba(40, 40, 40, 0.04), 9px 0 46px 0 rgba(40, 40, 40, 0.08), 24px 0 38px 0 rgba(40, 40, 40, 0.12)",
        },
        left: {
          10: "-1px 0 3px 0 rgba(40, 40, 40, 0.04), -2px 0 1px 0 rgba(40, 40, 40, 0.08), -1px 0 2px 0 rgba(40, 40, 40, 0.12)",
          20: "-2px 0 4px 0 rgba(40, 40, 40, 0.04), -1px 0 10px 0 rgba(40, 40, 40, 0.08), -4px 0 5px 0 rgba(40, 40, 40, 0.12)",
          30: "-5px 0 5px 0 rgba(40, 40, 40, 0.04), -3px 0 14px 0 rgba(40, 40, 40, 0.08), -8px 4px 10px 0 rgba(40, 40, 40, 0.12)",
          40: "-7px 0 8px 0 rgba(40, 40, 40, 0.04), -5px 0 22px 0 rgba(40, 40, 40, 0.08), -12px 0 17px 0 rgba(40, 40, 40, 0.12)",
          50: "-11px 0 15px 0 rgba(40, 40, 40, 0.04), -9px 0 46px 0 rgba(40, 40, 40, 0.08), -24px 0 38px 0 rgba(40, 40, 40, 0.12)",
        },
      },
      dark: {
        top: {
          10: "0 -1px 3px rgba(40, 40, 40, 0.08), 0 -1px 1px rgba(40, 40, 40, 0.16), 0 -1px 2px rgba(40, 40, 40, 0.24)",
          20: "0 -2px 4px rgba(40, 40, 40, 0.08), 0 -1px 10px rgba(40, 40, 40, 0.16), 0 -4px 5px rgba(40, 40, 40, 0.24)",
          30: "0 -5px 5px rgba(40, 40, 40, 0.08), 0 -3px 14px rgba(40, 40, 40, 0.16), 0 -8px 10px rgba(40, 40, 40, 0.24)",
          40: "0 -7px 8px rgba(40, 40, 40, 0.08), 0 -5px 22px rgba(40, 40, 40, 0.16), 0 -12px 17px rgba(40, 40, 40, 0.24)",
          50: "0 -11px 15px rgba(40, 40, 40, 0.08), 0 -9px 46px rgba(40, 40, 40, 0.16), 0 -24px 38px rgba(40, 40, 40, 0.24)",
        },
        center: {
          10: "0 0 3px rgba(40, 40, 40, 0.08), 0 0 1px rgba(40, 40, 40, 0.16), 0 0 2px rgba(40, 40, 40, 0.24)",
          20: "0 0 4px rgba(40, 40, 40, 0.08), 0 0 10px rgba(40, 40, 40, 0.16), 0 0 5px rgba(40, 40, 40, 0.24)",
          30: "0 0 5px rgba(40, 40, 40, 0.08), 0 0 14px rgba(40, 40, 40, 0.16), 0 0 10px rgba(40, 40, 40, 0.24)",
          40: "0 0 8px rgba(40, 40, 40, 0.08), 0 0 22px rgba(40, 40, 40, 0.16), 0 0 17px rgba(40, 40, 40, 0.24)",
          50: "0 0 15px rgba(40, 40, 40, 0.08), 0 0 46px rgba(40, 40, 40, 0.16), 0 0 38px rgba(40, 40, 40, 0.24)",
        },
        bottom: {
          10: "0 1px 3px rgba(40, 40, 40, 0.08), 0 2px 1px rgba(40, 40, 40, 0.16), 0 1px 3px rgba(40, 40, 40, 0.24)",
          20: "0 2px 4px rgba(40, 40, 40, 0.08), 0 1px 10px rgba(40, 40, 40, 0.16), 0 4px 5px rgba(40, 40, 40, 0.24)",
          30: "0 5px 5px rgba(40, 40, 40, 0.08), 0 3px 14px rgba(40, 40, 40, 0.16), 0 8px 10px rgba(40, 40, 40, 0.24)",
          40: "0 7px 8px rgba(40, 40, 40, 0.08), 0 5px 22px rgba(40, 40, 40, 0.16), 0 12px 17px rgba(40, 40, 40, 0.24)",
          50: "0 11px 15px rgba(40, 40, 40, 0.08), 0 9px 46px rgba(40, 40, 40, 0.16), 0 24px 38px rgba(40, 40, 40, 0.24)",
        },
        right: {
          10: "1px 0 3px 0 rgba(40, 40, 40, 0.08), 2px 0 1px 0 rgba(40, 40, 40, 0.16), 1px 0 2px 0 rgba(40, 40, 40, 0.24)",
          20: "2px 0 4px 0 rgba(40, 40, 40, 0.08), 1px 0 10px 0 rgba(40, 40, 40, 0.16), 4px 0 5px 0 rgba(40, 40, 40, 0.24)",
          30: "5px 0 5px 0 rgba(40, 40, 40, 0.08), 3px 0 14px 0 rgba(40, 40, 40, 0.16), 8px 0 10px 0 rgba(40, 40, 40, 0.24)",
          40: "7px 0 8px 0 rgba(40, 40, 40, 0.08), 5px 0 22px 0 rgba(40, 40, 40, 0.16), 12px 0 17px 0 rgba(40, 40, 40, 0.24)",
          50: "11px 0 15px 0 rgba(40, 40, 40, 0.08), 9px 0 46px 0 rgba(40, 40, 40, 0.16), 24px 0 38px 0 rgba(40, 40, 40, 0.24)",
        },
        left: {
          10: "-1px 0 3px 0 rgba(40, 40, 40, 0.08), -2px 0 1px 0 rgba(40, 40, 40, 0.16), -1px 0 2px 0 rgba(40, 40, 40, 0.24)",
          20: "-2px 0 4px 0 rgba(40, 40, 40, 0.08), -1px 0 10px 0 rgba(40, 40, 40, 0.16), -4px 0 5px 0 rgba(40, 40, 40, 0.24)",
          30: "-5px 0 5px 0 rgba(40, 40, 40, 0.08), -3px 0 14px 0 rgba(40, 40, 40, 0.16), -8px 0 10px 0 rgba(40, 40, 40, 0.24)",
          40: "-7px 0 8px 0 rgba(40, 40, 40, 0.08), -5px 0 22px 0 rgba(40, 40, 40, 0.16), -12px 0 17px 0 rgba(40, 40, 40, 0.24)",
          50: "-11px 0 15px 0 rgba(40, 40, 40, 0.08), -9px 0 46px 0 rgba(40, 40, 40, 0.16), -24px 0 38px 0 rgba(40, 40, 40, 0.24)",
        },
      },
    },
  },
})
