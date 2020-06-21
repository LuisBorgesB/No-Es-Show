// VARIABLES GLOBABLES

var botonMO = document.getElementById('iconBotonMO')
var cuerpo = document.querySelector('body')
var logo = document.getElementById('logo')
var sobreNosotros = document.getElementById('sobreNosotros')
var contenedorIconBotonMO = document.getElementById('contenedorIconBotonMO')
var logoMini = document.getElementById('logoMini')
var encabezado = document.getElementById('encabezado')
var sobreNosotros = document.getElementById('sobreNosotros')
var donar = document.getElementById('donar')
var RSP = document.querySelectorAll('.RSP')

// 
window.addEventListener('scroll', function () {
    if (scrollY >= 230 && botonMO.className == 'iconMoon') {
        contenedorIconBotonMO.style.position='fixed'
        contenedorIconBotonMO.style.boxShadow='0px 1px 5px 0px rgba(0,0,0,0.75)'
        logoMini.style.visibility='visible'
    } else if (scrollY >= 230 && botonMO.className == 'iconSun') {
        contenedorIconBotonMO.style.position='fixed'
        contenedorIconBotonMO.style.boxShadow='0px 1px 5px 0px rgba(0,0,0,0.75)'
        logoMiniMO.style.visibility='visible'
    } else if (scrollY <= 230) {
        logoMini.style.visibility='hidden'
        logoMiniMO.style.visibility='hidden'
        contenedorIconBotonMO.style.position=null
        contenedorIconBotonMO.style.boxShadow=null
    }
})
//
botonMO.addEventListener('click', function () {
    if (botonMO.className == 'iconMoon' && logoMini.style.visibility == 'visible') {
        contenedorIconBotonMO.style.backgroundColor='#000000'
        encabezado.style.backgroundColor='#000000'
        botonMO.classList.remove('iconMoon')
        botonMO.classList.add('iconSun')
        logo.classList.remove('logoMC')
        logo.classList.add('logoMO')
        sobreNosotros.style.backgroundColor='#000000'
        sobreNosotros.style.color='#ffffff'
        donar.style.backgroundColor='#000000'
        logoMini.style.visibility='hidden'
        logoMiniMO.style.visibility='visible'
    } else if (botonMO.className == 'iconSun' && logoMiniMO.style.visibility == 'visible') {
        contenedorIconBotonMO.style.backgroundColor='#ffffff'
        encabezado.style.backgroundColor='#ffffff'
        botonMO.classList.remove('iconSun')
        botonMO.classList.add('iconMoon')
        logo.classList.remove('logoMO')
        logo.classList.add('logoMC')
        sobreNosotros.style.backgroundColor='#ffffff'
        sobreNosotros.style.color='#000000'
        donar.style.backgroundColor='#ffffff'
        logoMini.style.visibility='visible'
        logoMiniMO.style.visibility='hidden'
    } else if (botonMO.className == 'iconMoon') {
        contenedorIconBotonMO.style.backgroundColor='#000000'
        encabezado.style.backgroundColor='#000000'
        botonMO.classList.remove('iconMoon')
        botonMO.classList.add('iconSun')
        logo.classList.remove('logoMC')
        logo.classList.add('logoMO')
        sobreNosotros.style.backgroundColor='#000000'
        sobreNosotros.style.color='#ffffff'
        donar.style.backgroundColor='#000000'
    } else {
        contenedorIconBotonMO.style.backgroundColor='#ffffff'
        encabezado.style.backgroundColor='#ffffff'
        botonMO.classList.remove('iconSun')
        botonMO.classList.add('iconMoon')
        logo.classList.remove('logoMO')
        logo.classList.add('logoMC')
        sobreNosotros.style.backgroundColor='#ffffff'
        sobreNosotros.style.color='#000000'
        donar.style.backgroundColor='#ffffff'
    }
})
// 

function inauguracion () {
    var DiaInauguracion = new Date('1 junio 2020 00:00:00').getTime();
    var hoy = new Date().getTime()
    var brecha = DiaInauguracion - hoy

        var segundos = 1000
        var minutos = segundos * 60
        var horas = minutos * 60
        var dias = horas * 24

        var d = Math.floor(brecha / (dias))
        var h = Math.floor((brecha % (dias))/(horas))
        var m = Math.floor((brecha % (horas))/(minutos))
        var s = Math.floor((brecha % (minutos))/(segundos))

        document.getElementById('dias').innerText = d
        document.getElementById('horas').innerText = h
        document.getElementById('minutos').innerText = m
        document.getElementById('segundos').innerText = s
}
setInterval(inauguracion, 1000)