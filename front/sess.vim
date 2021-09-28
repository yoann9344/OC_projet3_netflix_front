let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/cours/OC/p4\ -\ ocflix/repo/front
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd index.html
$argadd main.js
$argadd components/movie.js
$argadd components/pop_up.js
set stal=2
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabrewind
edit index.html
argglobal
balt components/flix-carousel.html
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 9 - ((8 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 057|
tabnext
edit index.js
argglobal
2argu
if bufexists("index.js") | buffer index.js | else | edit index.js | endif
if &buftype ==# 'terminal'
  silent file index.js
endif
balt main.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
tabnext
edit utils/template.js
argglobal
if bufexists("utils/template.js") | buffer utils/template.js | else | edit utils/template.js | endif
if &buftype ==# 'terminal'
  silent file utils/template.js
endif
balt utils/template.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 033|
tabnext
edit components/flix-carousel.js
argglobal
1argu
if bufexists("components/flix-carousel.js") | buffer components/flix-carousel.js | else | edit components/flix-carousel.js | endif
if &buftype ==# 'terminal'
  silent file components/flix-carousel.js
endif
balt components/flix-carousel.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 2 - ((1 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 2
normal! 040|
tabnext
edit components/flix-carousel.html
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe '2resize ' . ((&lines * 26 + 28) / 57)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
exe '3resize ' . ((&lines * 26 + 28) / 57)
exe 'vert 3resize ' . ((&columns * 103 + 103) / 207)
argglobal
if bufexists("components/flix-carousel.html") | buffer components/flix-carousel.html | else | edit components/flix-carousel.html | endif
if &buftype ==# 'terminal'
  silent file components/flix-carousel.html
endif
balt components/flix-carousel.html
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 5 - ((4 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 0
wincmd w
argglobal
if bufexists("components/flix-carousel.css") | buffer components/flix-carousel.css | else | edit components/flix-carousel.css | endif
if &buftype ==# 'terminal'
  silent file components/flix-carousel.css
endif
balt components/flix-carousel.cssx
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/cours/OC/p4\ -\ ocflix/repo/front/components
wincmd w
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 38 - ((12 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 38
normal! 0
lcd ~/cours/OC/p4\ -\ ocflix/repo/front/components
wincmd w
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe '2resize ' . ((&lines * 26 + 28) / 57)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
exe '3resize ' . ((&lines * 26 + 28) / 57)
exe 'vert 3resize ' . ((&columns * 103 + 103) / 207)
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/style.css
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/style.css") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/style.css | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/style.css | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/style.css
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/style.css
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/cours/OC/p4\ -\ ocflix/repo/front/components
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 103 + 103) / 207)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx
setlocal fdm=diff
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/cours/OC/p4\ -\ ocflix/repo/front/components
wincmd w
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css
setlocal fdm=diff
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/cours/OC/p4\ -\ ocflix/repo/front/components
wincmd w
exe 'vert 1resize ' . ((&columns * 103 + 103) / 207)
exe 'vert 2resize ' . ((&columns * 103 + 103) / 207)
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 4 - ((3 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! 02|
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 17 - ((16 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
normal! 04|
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.html
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.html") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.html | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.html | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.html
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 18 - ((7 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 0
tabnext
edit ~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js
argglobal
if bufexists("~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js") | buffer ~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js | else | edit ~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js | endif
if &buftype ==# 'terminal'
  silent file ~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js
endif
balt ~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=4
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 3 - ((2 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 3
normal! 042|
tabnext 4
set stal=1
badd +14 ~/cours/OC/p4\ -\ ocflix/repo/front/index.html
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/main.js
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/components/movie.js
badd +38 ~/cours/OC/p4\ -\ ocflix/repo/front/components/pop_up.js
badd +29 ~/cours/OC/p4\ -\ ocflix/repo/front/components/best_movies.js
badd +2 ~/cours/OC/p4\ -\ ocflix/repo/front/components/carousel/macro-carousel.js
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/components/carousel/macro-carousel.css
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/components/carousel/enums.js
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/components/carousel/macro-carousel.html
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/components/carousel/utils.js
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/components/carousel/passiveEventListeners.js
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.js
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.js
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.js
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/tmp.html
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/tmp2.html
badd +5 ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.html
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/dist/flix-carousel.9c974c18.html
badd +0 utils/template.js
badd +25 ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.css
badd +3 ~/cours/OC/p4\ -\ ocflix/repo/front/.parcelrc
badd +57 ~/cours/OC/p4\ -\ ocflix/repo/front/components/flix-carousel.cssx
badd +1 ~/cours/OC/p4\ -\ ocflix/repo/front/index.js
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/style.css
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/utils/import-html.js
badd +0 ~/cours/OC/p4\ -\ ocflix/repo/front/rollup.config.js
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOF
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
