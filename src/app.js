import SmoothScroll from './modules/smooth-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimationScroll from './modules/animation-scroll.js';

const smoothScroll = new SmoothScroll('[data-move="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="according"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimationScroll();
