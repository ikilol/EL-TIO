//SKSKSK_VIDEOGIOCOMIOPREFERITO

var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'phaser-container', {
  preload: preload,
  create: create,
  update: update,
  render: render
});


function preload() {

  game.stage.backgroundColor = '#FFFFFF';

  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();

  game.load.image('sfondotio', 'Assets/0_sfondotios.png');

  game.load.script('Gray', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Gray.js');
  game.load.script('Marble', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Marble.js');
  game.load.image('cielopartesopra', 'Assets/cielopartesopra-05.png');
  game.load.image('dbtgrotta', 'Assets/dbtgrotta.png');

  game.load.image('fineingressogrottadavanti', 'Assets/01-portafinedavanti-01.png');
  game.load.image('fineingressogrottadietro', 'Assets/01-portafinedietro-01.png');

  game.load.image('stalattite', 'Assets/stalattiti-02.png');
  game.load.image('achachasx', 'Assets/achachasx.png');
  game.load.image('sfondofinale', 'Assets/sfondofinale-07.png');

  game.load.image('mortegrotta', 'Assets/MORTEGROTTA-04.png');
  game.load.image('coprilama', 'Assets/coprilama-03.png');
  game.load.image('sfondodialogo', 'Assets/sfondodialogo.png');
  game.load.image('goodend', 'Assets/rendos.jpeg');
  game.load.image('badend', 'Assets/rendis.jpeg');

  game.load.image('cielovill', 'Assets/cielovillaggio-02.png');
  game.load.image('statuatio', 'Assets/1_statua.png');
  game.load.image('cielovill2', 'Assets/sfondovillaggio-04.png');
  game.load.image('cielovillsal', 'Assets/cielovillsal-04.png');
  game.load.image('cielovillsalz', 'Assets/cielovillsalz-03.png');

  game.load.image('dbtiostatua1', 'Assets/0_dbtio1.png');

  game.load.image('dbguardia', 'Assets/guardia1.png');
  game.load.image('dbvecio2', 'Assets/vecchio2.png');
  game.load.image('dbvecio1', 'Assets/dbvecio1.png');
  game.load.image('dbvendor', 'Assets/vendor1.png');
  game.load.image('dbvendor2', 'Assets/venditore2.png');
  game.load.image('dbguardia2', 'Assets/guardia2.png');
  game.load.image('dbprofeta1', 'Assets/profeta1+SCELTA.png');
  game.load.image('dbprofeta2.1', 'Assets/prof-pochestatue.png');
  game.load.image('dbprofeta2.2', 'Assets/prof-mediestatue.png');
  game.load.image('dbprofeta2.3', 'Assets/tuttestatue.png');
  game.load.image('dbprofeta3', 'Assets/profeta3.png');
  game.load.image('dbprofeta2.1', 'Assets/dialogoguardia.png');
  game.load.spritesheet('lama', 'Assets/ALL_lama_scalato.png', 300, 260);
  game.load.spritesheet('lava', 'Assets/lava.png', 800, 800);
  game.load.image('rocciafinale', 'Assets/piattaforme-06.png');

  game.load.spritesheet('tio', 'Assets/tio.png', 1570, 768);
  game.load.spritesheet('distruggi', 'Assets/distruggi.png', 240, 144);

  game.load.spritesheet('hud', 'Assets/hud.png', 400, 180);

  game.load.image('montagne2', 'Assets/montagne2-06.png');
  game.load.image('montagne2a', 'Assets/montagne2-03.png');


  game.load.spritesheet('tg', 'Assets/statusquo.png', 72, 80);
  game.load.spritesheet('ts', 'Assets/statusquo.png', 72, 80);
  game.load.spritesheet('idlet1', 'Assets/statusquo.png', 72, 80);

  game.load.image('montagne1', 'Assets/montagne-02.png');
  game.load.image('montagne1', 'Assets/montagne-03.png');

  game.load.image('nuvole1', 'Assets/nuvole1-02.png');
  game.load.image('nuvole1a', 'Assets/nuvole1-02.png');

  game.load.image('nuvole2', 'Assets/nuvoleretro-02.png');
  game.load.image('nuvole2a', 'Assets/nuvoleretro-02.png');

  game.load.image('sfondopassaggio', 'Assets/sfondopassaggio-07.png');

  game.load.image('sfondissimo', 'Assets/sfondissimo.png');
  game.load.image('sfondissimo2', 'Assets/sfondissimo2-03.png');
  //game.load.image('s6', 'Assets/casesdettagliate-01.png');
  game.load.image('s6', 'Assets/casesfondotristi-01.png');
  game.load.image('pavmorte', 'Assets/pavmorte.png');
  game.load.image('cactus', 'Assets/cactuss-01.png');
  game.load.image('cactus2', 'Assets/cactuss-03.png');
  game.load.image('saline', 'Assets/salinecorr.png');
  game.load.image('terreno', 'Assets/pavimento-04.png');
  game.load.image('terrenoprimopiano', 'Assets/davantiacasa-04.png')
  game.load.spritesheet('player', 'Assets/ALL_finale.png', 70, 112);
  game.load.spritesheet('stelline', 'Assets/0_stelline.png', 70, 112);
  game.load.spritesheet('guardia', 'Assets/guardis.png', 208, 224);

  game.load.image('c1', 'Assets/c1.png');
  game.load.image('t1', 'Assets/t1.png');
  game.load.image('v1', 'Assets/v1.png');
  game.load.image('v2', 'Assets/v2.png');
  game.load.image('v4', 'Assets/v4.png');
  game.load.image('v5', 'Assets/v5.png');
  game.load.image('v6', 'Assets/casachemanca.png');
  game.load.image('v3', 'Assets/v3.png');
  game.load.image('v7', 'Assets/v7.png');
  game.load.image('v8', 'Assets/v8.png');
  game.load.image('v9', 'Assets/v9.png');
  game.load.image('v10', 'Assets/v10.png');
  game.load.image('v11', 'Assets/v11.png');
  game.load.image('v12', 'Assets/v12.png');
  game.load.image('v13', 'Assets/v13.png');
  game.load.image('v14', 'Assets/v14.png');
  game.load.image('v15', 'Assets/v15.png');
  game.load.image('v16', 'Assets/v16.png');
  game.load.image('v17', 'Assets/v17.png');
  game.load.image('v18', 'Assets/v18.png');
  game.load.image('v19', 'Assets/v19.png');
  game.load.image('v20', 'Assets/v20.png');
  game.load.image('v21', 'Assets/v21.png');
  game.load.image('v22', 'Assets/v22.png');
  game.load.image('v23', 'Assets/v23.png');
  game.load.image('v24', 'Assets/v24.png');
  game.load.image('v25', 'Assets/v25.png');
  game.load.image('v26', 'Assets/v26.png');
  game.load.image('v27', 'Assets/v27.png');
  game.load.image('v28', 'Assets/v28.png');
  game.load.image('v29', 'Assets/v29.png');
  game.load.image('v30', 'Assets/v30.png');
  game.load.image('v31', 'Assets/v31.png');
  game.load.image('sfondodialogo', 'Assets/dia.png');
  game.load.image('bloccomura', 'Assets/bloccomura.png');
  game.load.image('lanciare', 'Assets/hud_achacha.png');
  game.load.image('sksk', 'Assets/sksk.png');


  game.load.image('sfondosal', 'Assets/SFONDO.png');
  game.load.image('montagnesal', 'Assets/MONTAGNE.png');
  game.load.image('roccesal', 'Assets/SASSISAL.png');
  game.load.image('sabbiasal', 'Assets/SABBIETTA.png');
  game.load.image('sassosal', 'Assets/SASSOPRIMOPIANOSAL.png');

  game.load.image('muro1', 'Assets/murettino-02.png');
  game.load.image('muro2', 'Assets/murettino-03.png');
  game.load.image('muro3', 'Assets/murettino-04.png');
  game.load.image('muro4', 'Assets/murettino-05.png');
  game.load.image('muro5', 'Assets/murettino-07.png');
  game.load.image('muro6', 'Assets/murettino-06.png');
  game.load.image('muro7', 'Assets/murettino-08.png');
  game.load.image('muro8', 'Assets/muri-17.png');

  game.load.image('calpestabile1', 'Assets/cal1.png');
  game.load.image('calpestabile2', 'Assets/cal-13.png');
  game.load.image('calpestabile3', 'Assets/cal-14.png');
  game.load.image('calpestabile4', 'Assets/cal-15.png');
  game.load.image('calpestabile5', 'Assets/calpestabile3.png');
  game.load.image('calpestabile6', 'Assets/calpestabile4.png');
  game.load.image('calpestabile7', 'Assets/muri-16.png');
  game.load.image('pocoprima1', 'Assets/pocoprima-13.png');
  game.load.image('pocoprima2', 'Assets/pocoprima-07.png');
  game.load.image('pocoprima3', 'Assets/pocoprima-08.png');
  game.load.image('pocoprima4', 'Assets/pocoprima-09.png');
  game.load.image('pocoprima5', 'Assets/pocoprima-10.png');
  game.load.image('pocoprima6', 'Assets/pocoprima-11.png');
  game.load.image('pocoprima7', 'Assets/pocoprima-12.png');
  game.load.image('pocoprima8', 'Assets/pocoprima-14.png');
  game.load.image('pocoprima9', 'Assets/pocoprima-15.png');

  game.load.image('mercato1', 'Assets/mercato1.png');
  game.load.image('mercato2', 'Assets/mercato2.png');
  game.load.image('mercato3', 'Assets/mercato3.png');
  game.load.image('mercato4', 'Assets/mercato4.png');
  game.load.image('mercato5', 'Assets/mercato5.png');
  game.load.image('mercato6', 'Assets/mercato6.png');
  game.load.image('offridevozione', 'Assets/scelta.png');

  game.load.image('dbt1', 'Assets/1-statua.png');
  game.load.image('t2', 'Assets/2-statua.png');
  game.load.image('t3', 'Assets/3-statua.png');
  game.load.image('t4', 'Assets/4-statua.png');
  game.load.image('t5', 'Assets/5-statua.png');
  game.load.image('t6', 'Assets/6-statua.png');

  game.load.image('dbtio1', 'Assets/0_Tio1.png');
  game.load.image('dbtio2', 'Assets/0_Tio3.png');
  game.load.image('notio', 'Assets/0_TioNo.png');

  game.load.image('menu', 'Assets/menu.png');
  game.load.image('continua', 'Assets/menu-09.png');
  game.load.image('tornaalteatro', 'Assets/menu-10.png');
  game.load.image('vecio1', 'Assets/vecio1.png');

  game.load.image('db1', 'Assets/db1.png');
  game.load.image('db2', 'Assets/db2.png');

  game.load.spritesheet('venditore1', 'Assets/vendor.png', 88, 156);
  game.load.spritesheet('vendor2', 'Assets/vendor2_ALL.png', 104, 176);
  game.load.spritesheet('vecio', 'Assets/vecio.png', 128, 132);
  game.load.spritesheet('profeta', 'Assets/profeta_ALL_scalato.png', 144, 236);
  game.load.spritesheet('aprichacha', 'Assets/ALL_achacha_scalato.png', 340, 280);


  game.load.image('si', 'Assets/si-vendor.png');
  game.load.image('no', 'Assets/no-vendor.png');
  game.load.image('achacha', 'Assets/achacha.png');
  game.load.image('achachabull', 'Assets/achachabull_1.png');
  game.load.image('puntini', 'Assets/hud_dialoghi.png');

  game.load.image('sfondosalinegrotta', 'Assets/sfondosalinegrotta-03.png');

  game.load.image('carretto', 'Assets/carretto.png');
  game.load.image('sfondogrotta', 'Assets/sfondogrotta-01.png');
  game.load.image('sopragrotta', 'Assets/sopragrotta-01.png');
  game.load.image('soprascuro', 'Assets/soprascuro-03.png');
  game.load.image('pavgrotta', 'Assets/pavgrotta-01.png');
  game.load.image('pavgrottasal', 'Assets/pavgrottasal-02.png');
  game.load.image('sottodav', 'Assets/sottodavanti-03.png');
  game.load.image('sottodietr', 'Assets/sottodietro-03.png');

  game.load.image('ingressogrottadavanti', 'Assets/ingressogrottadavanti-01.png');
  game.load.image('ingressogrottadietro', 'Assets/ingressogrottadietro-01.png');
  game.load.image('ingressogrottapar', 'Assets/ingressogrottapar-01.png');

  game.load.image('roccia1', 'Assets/roccia-02.png');
  game.load.image('roccia2', 'Assets/roccia-03.png');
  game.load.image('roccia3', 'Assets/roccia-04.png');
  game.load.image('roccia4', 'Assets/roccia-05.png');
  game.load.image('roccia5', 'Assets/roccia-06.png');
  game.load.image('roccia6', 'Assets/roccia-07.png');

  game.load.spritesheet('portainiziale', 'Assets/porta_scalato.png', 160, 240);
  game.load.spritesheet('fondoiniziale', 'Assets/fondo_scalato.png', 160, 240);
  game.load.image('casainizio', 'Assets/casa_scalato.png');
  game.load.image('casainiziodavanti', 'Assets/casa_scalato_davanti.png');

  game.load.image('roccialunga', 'Assets/piattaforme-02.png');

  game.load.image('retromura1', 'Assets/transizionevillaggiosaline2-02.png');
  game.load.image('retromura2', 'Assets/transizionevillaggiosaline-02.png');

  game.load.image('portafinaledietro', 'Assets/portafinale-07.png');
  game.load.image('portafinaledavanti', 'Assets/portafinaledav-07.png');

  game.load.crossOrigin = 'anonymous';
}

//VARIABILI
{

  var cadutalibera1 = false;
  var vadasolo = false;
  var romelulukaku = false;
  var ss1x = 33400;
  var ss1y = 600;
  var stoppleasex2 = true;
  var stoppleasex3 = true;
  var sbiso = false;
  var stoppleasex4 = true;
  var stoppleasex5 = true;
  var stoppleasex05 = true;
  var sciogli;
  var bellaperifra = true;
  var giasparato = false;
  var booleanaboy = false;
  var booleanavecio = false;
  var casainizio;
  var marble;
  var portainiziale;
  var fondoiniziale;
  var filter;
  var portainizioani;
  var giocoiniziaora = true;
  var tuttonormale;
  var fine;
  var corrisoletto = false;
  var vecio1;
  var ts1;
  var achachasx;


  var wakemeupwhenseptemberends = false;
  var parallassegrotta = false;
  var aggrostatuatio = true;
  var visto1 = false;
  var vistogrt = false;
  var visto2 = false;
  var lonely = false;
  var visto3 = false;
  var statuatio;
  var dbstatuatio;
  var tio;
  var dbtio1;
  var dbtio2;
  var visto4 = false;
  var visto5 = false;
  var sfondosal;
  var montagnesal;
  var roccesal;
  var sabbiasal;
  var sassosal;
  var player;
  var weapon;
  var camera;
  var venditore1;
  var vendor2;
  var idlevendor2;
  var dbvendor1;
  var si;
  var h0;
  var h1;
  var h2;
  var h3;
  var h4;
  var h5;
  var h6;
  var no;
  var achacha;
  var achachasiapre;
  var saltandoidlesx = false;
  var puntini1;
  var puntini2;
  var puntini;
  var spawn_y = 1370;
  var spawn_x = 50;
  var jumpButton;
  var cursors;
  var flash;
  var notio;
  var menu;
  var claustrofobico = false;
  var ESC;
  var menuaperto = false;
  var bloccocomandi = false;
  var continua;
  var idledx;
  var idlesx;
  var avocado = true;
  var evidenziatorecounter = 1;
  var evidenziatore = false;
  var papaya = true;
  var cacao = true;
  var trukk = true;
  var ananas = true;

  var muro1;
  var muro2;
  var muro3;
  var muro4;
  var muro5;
  var muro6;
  var muro7;
  var portagol;
  var muro8;
  var calpestabile;
  var calpestabile2;
  var calpestabile3;
  var calpestabile4;
  var calpestabile5;
  var calpestabile6;
  var calpestabile7;
  var pocoprima1;
  var pocoprima2;
  var pocoprima3;
  var pocoprima4;
  var pocoprima5;
  var pocoprima6;
  var pocoprima7;
  var pocoprima8;
  var pocoprima9;
  var sfondodialogo;
  var direzione = 1;

  //PALAZZI

  var varbasta = false;
  var v1;
  var v2;
  var v3;
  var v4;
  var v5;

  var v6;
  var conteout = true;
  var eriksen;

  var v7;
  var v8;
  var v9;
  var eliminaspeed = false;
  var v10;
  var v11;
  var v12;
  var v13;
  var v14;
  var v15;
  var v16;
  var v17;
  var v18;
  var v19;
  var v20;
  var v21;
  var v22;
  var v23;
  var v24;
  var v25;
  var v26;
  var v27;
  var v28;
  var dbtiostatua1;
  var v29;
  var v30;
  var v31;

  var mercato1;
  var lamasalta = false;
  var m01;
  var mercato2;
  var mercato3;
  var mercato4;
  var brodi;
  var mercato5;
  var mercato6;
  var terrenoprimopiano;
  var mortegrotta;
  var tipregofunziona;
  var brodi;

  //RETTANGOLI
  var r1;
  var r2;
  var r3;
  var r4;
  var r5;
  var rettangolo6;
  var allinizio;
  var r6;
  var morningjogging = false;
  var r7;
  var r8;
  var r9;
  var r10;
  var r11;
  var r12;
  var r13;
  var r14;
  var r15;
  var r16;
  var r17;
  var r18;
  var fine = false;
  var r19;
  var r20;
  var r21;
  var r22;
  var r23;
  var r24;
  var r25;
  var r26;
  var r27;
  var r28;
  var r29;
  var r30;
  var r31;
  var r32;
  var sfondo6;
  var buletto;
  var pavmorte;
  var cactus;
  var profeta;
  var giorgio;
  var eddy = false;

  var pav1;
  var barbisosx = false;
  var barbisodx = false;
  var dbtgrotta;

  //WALLPAPER
  var s1;
  var s2;
  var s3;
  var s4;
  var s5;
  var s6;
  var sfondosalinegrotta;
  var montagne2;
  var montagne2a;
  var montagne1;
  var montagne1a;
  var terreno;
  var lautaro = false;
  var dbtio3;
  var saline;
  var aggrovendor = false;
  var aggrogrt = false;
  var aggrovendor2 = false;
  var comprato = false;
  var varachacha = false;
  var trex = false;
  var fireTime = 0;
  var bloccomura;
  var guardia;
  var basicbooleana = false;
  var tornaalteatro;
  var sfondogrotta;
  var sopragrotta;
  var soprascuro;
  var pavgrotta;
  var pavgrottasal;
  var ingressogrottadietro;
  var ingressogrottadavanti;
  var ingressogrottapar;
  var sottodav;
  var sottodietr;
  var badend;

  var timer;
  var c1;
  var t1;
  var t3;
  var t4;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  var totemLabel;
  var gray;
  var flashed = false;
  var F;
  var varachacha = false;
  var aggrovendor = false;
  var pepe = false;
  var aggroprofeta = false;
  var aggrovecio = false;
  var counter = 5;
  var comprato = false;
  var abilitaattacco = false;
  var fireTime = 0;
  var aggro1 = false;
  var aggro2 = false;
  var aggrotgrotta = false;
  var tgrotta;
  var vistotgrotta = false;
  var dialogovecchio2 = false;
  var db1;
  var db2;
  var d1x;
  var d1y;
  var d2x;
  var stelline;
  var parlaparla = false;
  var tappati = false;
  var d2y;
  var s6a;
  var s6b;
  var sfondissimo;
  var sfondissimo2;
  var sfondopassaggio;
  var volotroppo = true;

  var rettangoloinvisivile;
  var rprova;
  var rpsf;
  var rpc2;
  var rpc3;

  var retromura1;
  var retromura2;

  var cielovillaggio;
  var cielovill2;

  var cielopartesopra;
  var cielovillsal;
  var cielovillsalz;
  var nuvole1a;
  var nuvole1;
  var nuvole2a;
  var nuvole2;

  var roccia1;
  var roccia2;
  var roccia3;
  var roccia4;
  var roccia5;
  var roccia6;
  var roccialunga;
  var tg;
  var ts;
  var saltandosx = false;
  var saltandodx = false;
  var buonafine;

  var coprilama;
  var sfondodialogo;

  var lava;

  var abilitadialogo = false
  var cliccone = false;
  var aggroguardia = false;
}

function create() {

  var preloadingDiv = document.getElementById('preloading');
  preloadingDiv.style.display = 'none';

  var container = document.getElementById('phaser-container');
  container.style.display = 'block'

  game.physics.startSystem(Phaser.Physics.P2JS);

  { //WALLPAPER


    //sfondissimo = game.add.sprite(0, 80, 'sfondissimo');

    //sfondissimo2 = game.add.sprite(0, 80, 'sfondissimo2');
    //sfondissimo2.alignTo(sfondissimo, Phaser.RIGHT_TOP);

    cielopartesopra = game.add.sprite(0, 0, 'cielopartesopra');

    cielovill = game.add.sprite(-700, 80, 'cielovill');

    cielovill2 = game.add.sprite(0, 80, 'cielovill2');
    cielovill2.alignTo(cielovill, Phaser.RIGHT_TOP);

    nuvole2 = game.add.sprite(0, 80, 'nuvole2');

    nuvole2a = game.add.sprite(0, 80, 'nuvole2a');
    nuvole2a.alignTo(nuvole2, Phaser.RIGHT_TOP);

    montagne2 = game.add.sprite(0, 80, 'montagne2');

    //montagne2a = game.add.sprite(0, 80, 'montagne2a');
    //montagne2a.alignTo(montagne2, Phaser.RIGHT_TOP);

    montagne1 = game.add.sprite(0, 80, 'montagne1');

    sfondopassaggio = game.add.sprite(16450, 30, 'sfondopassaggio');

    cielovillsal = game.add.sprite(20100, 80, 'cielovillsal');
    //ielovillsalz = game.add.sprite(20100, 80, 'cielovillsalz');

    sfondosalinegrotta = game.add.sprite(29000, 80, 'sfondosalinegrotta');

    retromura1 = game.add.sprite(19650, 1200, 'retromura1');
    retromura1.scale.setTo(0.2);


    //cielovillsal.alignTo(cielovill, Phaser.RIGHT_TOP);

    //montagne1a = game.add.sprite(0, 80, 'montagne1a');
    //montagne1a.alignTo(montagne2, Phaser.RIGHT_TOP);

    nuvole1 = game.add.sprite(0, 80, 'nuvole1');

    nuvole1a = game.add.sprite(0, 80, 'nuvole1a');
    nuvole1a.alignTo(nuvole1, Phaser.RIGHT_TOP);

    terreno = game.add.sprite(-700, 1460, 'terreno');
    game.physics.arcade.enable(terreno);
    terreno.body.immovable = true;

    terreno1 = game.add.sprite(0, 1460, 'terreno');
    game.physics.arcade.enable(terreno1);
    terreno1.body.immovable = true;
    terreno1.alignTo(terreno, Phaser.RIGHT_TOP);

    s6 = game.add.sprite(0, 1042, 's6');
    s6.scale.setTo(0.6);

    //s6a = game.add.sprite(10800, 1109, 's6');
    //s6a.scale.setTo(0.6);
    //s6a.alignTo(s6, Phaser.RIGHT_TOP);

    //s6b = game.add.sprite(10800, 1109, 's6');
    //s6b.scale.setTo(0.6);
    //s6b.alignTo(s6a, Phaser.RIGHT_TOP);

  }
  //WORLDBOUNDS

  game.world.setBounds(-700, 0, 50000, 1500);

  cactus = game.add.sprite(-100, 920, 'cactus');
  cactus.scale.setTo(0.8);

  cactus2 = game.add.sprite(9600, 920, 'cactus2');
  cactus2.scale.setTo(0.8);

  pavmorte = game.add.sprite(460, 1450, 'pavmorte');
  game.physics.arcade.enable(pavmorte);
  pavmorte.alpha = 0;
  pavmorte.scale.setTo(0.95);
  pavmorte.body.immovable = true;

  { //PALAZZI


    v1 = game.add.sprite(500, 1150, 'v1');
    //v2.scale.setTo(0.8);
    game.physics.arcade.enable(v1);
    v1.body.immovable = true;
    v1.body.velocity.x = 0;

    v2 = game.add.sprite(500, 1150, 'v2');
    //v2.scale.setTo(0.8);
    game.physics.arcade.enable(v2);
    v2.body.immovable = true;
    v2.body.velocity.x = 0;

    v3 = game.add.sprite(1100, 1200, 'v3');
    //v3.scale.setTo(0.8);
    game.physics.arcade.enable(v3);
    v3.body.immovable = true;
    v3.body.velocity.x = 0;

    v4 = game.add.sprite(700, 700, 'v4');
    //v4.scale.setTo(1);
    game.physics.arcade.enable(v4);
    v4.body.immovable = true;
    v4.body.velocity.x = 0;

    //FAKEPLATFORM
    v5 = game.add.sprite(900, 1200, 'v5');
    game.physics.arcade.enable(v5);
    v5.body.velocity.x = 0;

    v6 = game.add.sprite(1100, 1200, 'v6');
    game.physics.arcade.enable(v6);
    v6.body.immovable = true;

    v7 = game.add.sprite(1100, 1200, 'v7');
    //v7.scale.setTo(0.23);
    game.physics.arcade.enable(v7);
    v7.body.immovable = true;

    v8 = game.add.sprite(1100, 1200, 'v8');
    //v8.scale.setTo(0.8);
    game.physics.arcade.enable(v8);
    v8.body.immovable = true;

    //FAKEPLATFORM
    v9 = game.add.sprite(1100, 1200, 'v9');
    game.physics.arcade.enable(v9);
    v9.body.velocity.x = 0;
    //v9.body.immovable = true;

    v10 = game.add.sprite(1100, 1200, 'v10');
    game.physics.arcade.enable(v10);
    v10.body.immovable = true;

    v11 = game.add.sprite(1100, 1200, 'v11');
    game.physics.arcade.enable(v11);
    v11.body.immovable = true;

    v12 = game.add.sprite(0, 1200, 'v12');
    game.physics.arcade.enable(v12);
    v12.body.immovable = true;

    v13 = game.add.sprite(1100, 1200, 'v13');
    game.physics.arcade.enable(v13);
    v13.scale.setTo(0.9);
    v13.body.immovable = true;

    v14 = game.add.sprite(1100, 1200, 'v14');
    game.physics.arcade.enable(v14);
    v14.scale.setTo(0.9);
    v14.body.immovable = true;

    v15 = game.add.sprite(1100, 1200, 'v15');
    game.physics.arcade.enable(v15);
    v15.body.velocity.x = 0;
    //v15.body.immovable = true;

    v16 = game.add.sprite(1100, 1200, 'v16');
    game.physics.arcade.enable(v16);
    v16.body.immovable = true;

    v17 = game.add.sprite(1100, 1200, 'v17');
    game.physics.arcade.enable(v17);
    v17.body.immovable = true;

    v18 = game.add.sprite(1100, 1200, 'v18');
    game.physics.arcade.enable(v18);
    v18.body.immovable = true;

    v19 = game.add.sprite(1100, 1200, 'v19');
    game.physics.arcade.enable(v19);
    v19.body.velocity.x = 0;

    v20 = game.add.sprite(1100, 1200, 'v20');
    game.physics.arcade.enable(v20);
    v20.body.immovable = true;

    v21 = game.add.sprite(1100, 1200, 'v21');
    game.physics.arcade.enable(v21);
    v21.body.immovable = true;

    v22 = game.add.sprite(1100, 1200, 'v22');
    game.physics.arcade.enable(v22);
    v22.body.immovable = true;

    v23 = game.add.sprite(1100, 1200, 'v23');
    game.physics.arcade.enable(v23);
    //v13.scale.setTo(0.9);
    v23.body.immovable = true;

    v24 = game.add.sprite(1100, 1200, 'v24');
    game.physics.arcade.enable(v24);
    v24.scale.setTo(0.9);
    v24.body.velocity.x = 0;

    v25 = game.add.sprite(1100, 1200, 'v25');
    game.physics.arcade.enable(v25);
    v25.scale.setTo(0.8);
    v25.body.immovable = true;

    v26 = game.add.sprite(1100, 1200, 'v26');
    game.physics.arcade.enable(v26);
    v26.body.velocity.x = 0;

    v27 = game.add.sprite(1100, 1200, 'v27');
    game.physics.arcade.enable(v27);
    v27.scale.setTo(0.9);
    v27.body.immovable = true;

    v28 = game.add.sprite(1100, 1200, 'v28');
    game.physics.arcade.enable(v28);
    v28.body.velocity.x = 0;

    v29 = game.add.sprite(1100, 1200, 'v29');
    game.physics.arcade.enable(v29);
    v29.body.immovable = true;

    v30 = game.add.sprite(1100, 1200, 'v30');
    game.physics.arcade.enable(v30);
    v30.body.immovable = true;

    v31 = game.add.sprite(1100, 1200, 'v31');
    game.physics.arcade.enable(v31);
    v31.body.immovable = true;
  }

  //CACTUS
  //c1 = game.add.sprite(900, 1400, 'c1');
  //c1.scale.setTo(0.08);
  //game.physics.arcade.enable(c1);
  //c1.body.immovable = true;

  //TOTEM
  t1 = game.add.sprite(1870, 1020, 'idlet1');
  game.physics.arcade.enable(t1);
  t1.animations.add("idlevill1")
  t1.animations.play('idlevill1', 10, true)
  t1.body.immovable = true;

  t0 = game.add.sprite(250, 1230, 'idlet1');
  game.physics.arcade.enable(t0);
  t0.animations.add("idlevill0")
  t0.animations.play('idlevill0', 10, true)
  t0.body.immovable = true;

  t4 = game.add.sprite(4600, 900, 'idlet1');
  game.physics.arcade.enable(t4);
  t4.body.immovable = true;
  t4.animations.add("idlevill4")
  t4.animations.play('idlevill4', 10, true)

  t5 = game.add.sprite(7060, 430, 'idlet1');
  game.physics.arcade.enable(t5);
  t5.animations.add("idlevill5")
  t5.animations.play('idlevill5', 10, true)
  t5.body.immovable = true;

  //t6 = game.add.sprite(8515, 640, 't1');
  //t6.scale.setTo(0.1);
  //game.physics.arcade.enable(t6);
  //t6.body.immovable = true;

  t7 = game.add.sprite(11720, 640, 'idlet1');
  game.physics.arcade.enable(t7);
  t7.animations.add("idlevill7")
  t7.animations.play('idlevill7', 10, true)
  t7.body.immovable = true;

  t8 = game.add.sprite(13650, 670, 'idlet1');
  game.physics.arcade.enable(t8);
  t8.animations.add("idlevill8")
  t8.animations.play('idlevill8', 10, true)
  t8.body.immovable = true;

  //t9 = game.add.sprite(14695, 1000, 't1');
  //t9.scale.setTo(0.1);
  //game.physics.arcade.enable(t9);
  //t9.body.immovable = true;

  pocoprima1 = game.add.sprite(16370, 1340, 'pocoprima1');
  game.physics.arcade.enable(pocoprima1);
  pocoprima1.body.immovable = true;
  pocoprima1.scale.setTo(0.9);

  //COMANDI
  //cursors = game.input.keyboard.createCursorKeys();
  jumpButton1 = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  jumpButton2 = game.input.keyboard.addKey(Phaser.Keyboard.W);
  ESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);

  A = game.input.keyboard.addKey(Phaser.Keyboard.A);
  gray = game.add.filter('Gray');

  D = game.input.keyboard.addKey(Phaser.Keyboard.D);
  gray = game.add.filter('Gray');

  //POTEREF
  F = game.input.keyboard.addKey(Phaser.Keyboard.F);
  gray = game.add.filter('Gray');

  //CAMERA
  //game.camera.follow(player);

  game.camera.y = -200;


  //DIALOGOBOX

  { //RETTANGOLI

    pav1 = new Phaser.Rectangle(0, 1480, 200, 20);
    game.physics.arcade.enable(pav1);

    r0 = new Phaser.Rectangle(0, 1470, 2400, 20);
    r1 = new Phaser.Rectangle(450, 1500, 2400, 20);
    r2 = new Phaser.Rectangle(850, 1520, 2400, 20);
    r3 = new Phaser.Rectangle(1300, 1500, 2400, 20);
    r4 = new Phaser.Rectangle(1800, 1550, 2400, 20);
    r5 = new Phaser.Rectangle(2100, 1500, 2400, 20);
    r6 = new Phaser.Rectangle(2550, 1500, 2400, 20);
    r7 = new Phaser.Rectangle(3100, 1500, 2400, 20);
    r8 = new Phaser.Rectangle(3550, 1500, 2400, 20);
    r9 = new Phaser.Rectangle(3950, 1500, 2400, 20);
    r10 = new Phaser.Rectangle(4400, 1500, 2400, 20);
    r11 = new Phaser.Rectangle(5100, 1500, 2400, 20);
    r12 = new Phaser.Rectangle(5750, 1600, 2400, 20);
    r13 = new Phaser.Rectangle(6350, 1550, 2400, 20);
    r14 = new Phaser.Rectangle(6900, 1580, 2400, 20);
    r15 = new Phaser.Rectangle(7400, 1500, 2400, 20);
    r16 = new Phaser.Rectangle(7890, 1550, 2400, 20);
    r17 = new Phaser.Rectangle(8400, 1500, 2400, 20);
    r18 = new Phaser.Rectangle(8900, 1500, 2400, 20);
    r19 = new Phaser.Rectangle(9500, 1500, 2400, 20);
    r20 = new Phaser.Rectangle(10000, 1500, 2400, 20);
    r21 = new Phaser.Rectangle(10600, 1500, 2400, 20);
    r22 = new Phaser.Rectangle(11150, 1550, 2400, 20);
    r23 = new Phaser.Rectangle(11600, 1550, 2400, 20);
    r24 = new Phaser.Rectangle(12000, 1580, 2400, 20);
    r25 = new Phaser.Rectangle(12550, 1550, 2400, 20);
    r26 = new Phaser.Rectangle(13200, 1580, 2400, 20);
    r27 = new Phaser.Rectangle(13550, 1500, 2400, 20);
    r28 = new Phaser.Rectangle(14000, 1500, 2400, 20);
    r29 = new Phaser.Rectangle(14600, 1500, 2400, 20);
    r30 = new Phaser.Rectangle(15000, 1500, 2400, 20);
    r31 = new Phaser.Rectangle(15400, 1490, 2400, 20);
    r32 = new Phaser.Rectangle(17500, 1500, 2400, 20);

    rettangoloinvisivile = game.add.sprite(19450, 1000, 'bloccomura');
    rettangoloinvisivile.tint = 0XFF0000
    game.physics.arcade.enable(rettangoloinvisivile);
    rettangoloinvisivile.alpha = 0.5;
    //TOGLIERE
    rettangoloinvisivile.visible = false;
    rettangoloinvisivile.body.immovable = true;

    v1.alignTo(r1, Phaser.TOP_LEFT);
    v2.alignTo(r2, Phaser.TOP_LEFT);
    v3.alignTo(r3, Phaser.TOP_LEFT);
    v4.alignTo(r4, Phaser.TOP_LEFT);
    v5.alignTo(r5, Phaser.TOP_LEFT);
    v6.alignTo(r6, Phaser.TOP_LEFT);
    v7.alignTo(r7, Phaser.TOP_LEFT);
    v8.alignTo(r8, Phaser.TOP_LEFT);
    v9.alignTo(r9, Phaser.TOP_LEFT);
    v10.alignTo(r10, Phaser.TOP_LEFT);
    v11.alignTo(r11, Phaser.TOP_LEFT);
    v12.alignTo(r12, Phaser.TOP_LEFT);
    v13.alignTo(r13, Phaser.TOP_LEFT);
    v14.alignTo(r14, Phaser.TOP_LEFT);
    v15.alignTo(r15, Phaser.TOP_LEFT);
    v16.alignTo(r16, Phaser.TOP_LEFT);
    v17.alignTo(r17, Phaser.TOP_LEFT);
    v18.alignTo(r18, Phaser.TOP_LEFT);
    v19.alignTo(r19, Phaser.TOP_LEFT);
    v20.alignTo(r20, Phaser.TOP_LEFT);
    v21.alignTo(r21, Phaser.TOP_LEFT);
    v22.alignTo(r22, Phaser.TOP_LEFT);
    v23.alignTo(r23, Phaser.TOP_LEFT);
    v24.alignTo(r24, Phaser.TOP_LEFT);
    v25.alignTo(r25, Phaser.TOP_LEFT);
    v26.alignTo(r26, Phaser.TOP_LEFT);
    v27.alignTo(r27, Phaser.TOP_LEFT);
    v28.alignTo(r28, Phaser.TOP_LEFT);
    v29.alignTo(r29, Phaser.TOP_LEFT);
    v30.alignTo(r30, Phaser.TOP_LEFT);
    v31.alignTo(r31, Phaser.TOP_LEFT);
  }


  terrenoprimopiano = game.add.sprite(-700, 1490, 'terrenoprimopiano');
  game.physics.arcade.enable(terrenoprimopiano);
  terrenoprimopiano.body.immovable = true;

  game.camera.onFadeComplete.add(resetFade, this);

  calpestabile = game.add.sprite(18200, 875, 'calpestabile1');
  calpestabile.scale.setTo(0.5);
  game.physics.arcade.enable(calpestabile);
  calpestabile.body.immovable = true;

  calpestabile2 = game.add.sprite(18200, 900, 'calpestabile2');
  calpestabile2.scale.setTo(0.5);
  game.physics.arcade.enable(calpestabile2);
  calpestabile2.body.immovable = true;

  calpestabile3 = game.add.sprite(18400, 1075, 'calpestabile3');
  calpestabile3.scale.setTo(0.5);
  game.physics.arcade.enable(calpestabile3);
  calpestabile3.body.immovable = true;

  muro8 = game.add.sprite(18300, 1000, 'muro8');
  muro8.scale.setTo(0.5);
  game.physics.arcade.enable(muro8);
  muro8.body.immovable = true;

  calpestabile4 = game.add.sprite(18408, 1108, 'calpestabile4');
  calpestabile4.scale.setTo(0.5);
  calpestabile4.alignTo(calpestabile3, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(calpestabile4);
  calpestabile4.body.immovable = true;

  calpestabile5 = game.add.sprite(18990, 980, 'calpestabile5');
  calpestabile5.scale.setTo(0.5);
  game.physics.arcade.enable(calpestabile5);
  calpestabile5.body.immovable = true;

  calpestabile6 = game.add.sprite(19580, 1020, 'calpestabile6');
  calpestabile6.scale.setTo(0.5);
  game.physics.arcade.enable(calpestabile6);
  calpestabile6.body.immovable = true;

  calpestabile7 = game.add.sprite(19950, 650, 'calpestabile7');
  calpestabile7.scale.setTo(0.5);
  game.physics.arcade.enable(calpestabile7);
  calpestabile7.body.immovable = true;

  retromura2 = game.add.sprite(19650, 1170, 'retromura2');
  retromura2.scale.setTo(0.2);

  muro1 = game.add.sprite(18200, 1120, 'muro1');
  muro1.scale.setTo(0.5);

  //game.physics.arcade.enable(terreno7);
  muro2 = game.add.sprite(18400, 1000, 'muro2');
  muro2.alignTo(muro1, Phaser.RIGHT_TOP);
  muro2.scale.setTo(0.5);

  rpc1 = new Phaser.Rectangle(16950, 1470, 500, 20);
  rpc2 = new Phaser.Rectangle(17250, 1470, 500, 20);
  rpc3 = new Phaser.Rectangle(17700, 1470, 500, 20);
  rpc4 = new Phaser.Rectangle(16550, 1470, 500, 20);

  pocoprima2 = game.add.sprite(17000, 1220, 'pocoprima2');
  pocoprima2.alignTo(rpc1, Phaser.TOP_LEFT);

  pocoprima3 = game.add.sprite(17000, 1220, 'pocoprima3');
  game.physics.arcade.enable(pocoprima3);
  pocoprima3.body.immovable = true;
  pocoprima3.alignTo(pocoprima2, Phaser.TOP_LEFT);

  pocoprima4 = game.add.sprite(17000, 1220, 'pocoprima4');
  pocoprima4.alignTo(rpc2, Phaser.TOP_LEFT);

  pocoprima5 = game.add.sprite(17000, 1220, 'pocoprima5');
  game.physics.arcade.enable(pocoprima5);
  pocoprima5.body.immovable = true;
  pocoprima5.alignTo(pocoprima4, Phaser.TOP_LEFT);

  pocoprima6 = game.add.sprite(17000, 1220, 'pocoprima6');
  pocoprima6.alignTo(rpc3, Phaser.TOP_LEFT);

  pocoprima7 = game.add.sprite(17000, 1220, 'pocoprima7');
  game.physics.arcade.enable(pocoprima7);
  pocoprima7.body.immovable = true;
  pocoprima7.alignTo(pocoprima6, Phaser.TOP_LEFT);

  pocoprima8 = game.add.sprite(17000, 1220, 'pocoprima8');
  pocoprima8.alignTo(rpc4, Phaser.TOP_LEFT);

  pocoprima9 = game.add.sprite(17000, 1220, 'pocoprima9');
  game.physics.arcade.enable(pocoprima9);
  pocoprima9.body.immovable = true;
  pocoprima9.alignTo(pocoprima8, Phaser.TOP_LEFT);

  mercato1 = game.add.sprite(16350, 1270, 'mercato1');
  mercato1.scale.setTo(0.35);

  mercato2 = game.add.sprite(16650, 1230, 'mercato2');
  mercato2.scale.setTo(0.4);

  mercato3 = game.add.sprite(16900, 1230, 'mercato3');
  mercato3.scale.setTo(0.4);

  mercato4 = game.add.sprite(17200, 1230, 'mercato4');
  mercato4.scale.setTo(0.4);

  mercato5 = game.add.sprite(17450, 1230, 'mercato5');
  mercato5.scale.setTo(0.4);

  mercato6 = game.add.sprite(17770, 1230, 'mercato6');
  mercato6.scale.setTo(0.4);

  venditore1 = game.add.sprite(18000, 1328, 'venditore1');
  game.physics.arcade.enable(venditore1);
  venditore1.animations.add("idlevendor", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  vendor2 = game.add.sprite(17100, 1310, 'vendor2');
  vendor2.animations.add("vendor2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  vecio = game.add.sprite(16030, 1350, 'vecio');
  game.physics.arcade.enable(vecio);
  vecio.inputEnabled = true;
  vecio.body.immovable = true;
  vecio.animations.add("idlevecio", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  casainizio = game.add.sprite(-720, 1150, 'casainizio');
  casainizio.scale.setTo(0.8);

  fondo = game.add.sprite(-420, 1348, 'fondoiniziale');
  game.physics.arcade.enable(fondo);
  fondo.scale.setTo(0.8);

  iniziogioco = game.add.sprite(70, 1450, 'bloccomura');
  game.physics.arcade.enable(iniziogioco);
  iniziogioco.alpha = 0;
  iniziogioco.scale.setTo(0.3);
  iniziogioco.body.immovable = true;

  fintoplayer = game.add.sprite(-480, 1350, 'player');
  game.physics.arcade.enable(fintoplayer);
  fintoplayer.body.immovable = false;
  fintoplayer.body.gravity.y = 800;
  fintoplayer.body.velocity.x = 300;
  fintoplayer.animations.add("dx", [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
  fintoplayer.animations.play('dx', 15, true);

  game.camera.follow(fintoplayer)

  casainiziodavanti = game.add.sprite(-720, 1150, 'casainiziodavanti');
  casainiziodavanti.scale.setTo(0.8);

  carrettoc = game.add.sprite(500, 1120, 'carretto');
  carrettoc.scale.setTo(0.66);

  carretto = game.add.sprite(230, 1340, 'bloccomura');
  carretto.scale.setTo(0.45);
  carretto.alpha = 0;
  game.physics.arcade.enable(carretto);
  carretto.body.immovable = true;

  portagol = game.add.sprite(-420, 1348, 'portainiziale');
  game.physics.arcade.enable(portagol);
  portagol.scale.setTo(0.8);
  portagol.animations.add('portainiziale', [4, 0, 1, 2, 3, 4]);

  guardia = game.add.sprite(19350, 1310, 'guardia');
  game.physics.arcade.enable(guardia);
  guardia.inputEnabled = true;
  guardia.body.immovable = true;
  guardia.animations.add("idleguardia", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  aprichacha = game.add.sprite(19300, 1260, 'aprichacha');
  aprichacha.animations.add('aprichacha');
  aprichacha.visible = false;

  stord = guardia.animations.add("stordito2", [12, 13, 14, 15, 16, 17, 18, 19]);

  loopino = guardia.animations.add("storditoloop", [24, 25, 26, 27, 28, 29, 30, 31]);
  stord.onComplete.add(stelleloop);

  ingressogrottapar = game.add.sprite(29800, 1100, 'ingressogrottapar');
  game.physics.arcade.enable(ingressogrottapar);
  ingressogrottapar.scale.setTo(0.85);
  ingressogrottapar.body.immovable = true;

  //saline

  montagnesal = game.add.sprite(19900, 820, 'montagnesal');
  montagnesal.scale.setTo(0.7);
  //sfondosal.alignTo(s6b, Phaser.RIGHT_TOP);

  sabbiasal = game.add.sprite(19900, 820, 'sabbiasal');
  //sfondosal.alignTo(s6b, Phaser.RIGHT_TOP);
  sabbiasal.scale.setTo(0.7);

  roccesal = game.add.sprite(19900, 820, 'roccesal');
  roccesal.scale.setTo(0.7);
  //sfondosal.alignTo(s6b, Phaser.RIGHT_TOP);
  //GROTTA

  sfondogrotta = game.add.sprite(31450, -200, 'sfondogrotta');
  game.physics.arcade.enable(sfondogrotta);
  sfondogrotta.body.immovable = true;

  sfondogrotta = game.add.sprite(31450, 270, 'sfondogrotta');
  game.physics.arcade.enable(sfondogrotta);
  sfondogrotta.body.immovable = true;

  sopragrotta = game.add.sprite(31550, 220, 'sopragrotta');
  game.physics.arcade.enable(sopragrotta);
  sopragrotta.body.immovable = true;

  soprascuro = game.add.sprite(31650, 100, 'soprascuro');
  game.physics.arcade.enable(soprascuro);
  soprascuro.body.immovable = true;

  sopragrotta2 = game.add.sprite(31550, 0, 'sopragrotta');
  game.physics.arcade.enable(sopragrotta2);
  sopragrotta2.body.immovable = true;

  pavgrotta = game.add.sprite(31500, 1370, 'pavgrotta');
  game.physics.arcade.enable(pavgrotta);
  pavgrotta.body.immovable = true;

  ingressogrottadietro = game.add.sprite(31000, 730, 'ingressogrottadietro');
  game.physics.arcade.enable(ingressogrottadietro);
  ingressogrottadietro.scale.setTo(0.85);
  ingressogrottadietro.body.immovable = true;

  pavgrottasal = game.add.sprite(29700, 1420, 'pavgrottasal');
  game.physics.arcade.enable(pavgrottasal);
  pavgrottasal.body.immovable = true;
  pavgrottasal.scale.setTo(0.6);

  sottodietr = game.add.sprite(33100, 1300, 'sottodietr');
  game.physics.arcade.enable(sottodietr);
  sottodietr.body.immovable = true;
  sottodietr.scale.setTo(0.6);

  rs1 = new Phaser.Rectangle(33700, 300, 100, 100);

  stalattite1 = game.add.sprite(33700, 600, 'stalattite');
  game.physics.arcade.enable(stalattite1);
  stalattite1.body.velocity.x = 0;
  stalattite1.alignTo(rs1, Phaser.BOTTOM_LEFT);

  roccia2 = game.add.sprite(33400, 1200, 'roccia2');
  game.physics.arcade.enable(roccia2);
  roccia2.body.immovable = true;

  roccia3 = game.add.sprite(33800, 1050, 'roccia4');
  game.physics.arcade.enable(roccia3);
  roccia3.body.immovable = true;

  pressure4 = game.add.sprite(34100, 800, 'bloccomura');
  pressure4.alpha = 0;
  game.physics.arcade.enable(pressure4);
  pressure4.scale.setTo(0.3);

  rs4 = new Phaser.Rectangle(34450, 100, 100, 100);

  stalattite4 = game.add.sprite(34450, 200, 'stalattite');
  game.physics.arcade.enable(stalattite4);
  stalattite4.body.velocity.x = 0;
  stalattite4.alignTo(rs4, Phaser.BOTTOM_LEFT);

  roccia4 = game.add.sprite(34100, 900, 'roccia3');
  game.physics.arcade.enable(roccia4);
  roccia4.body.immovable = true;

  rs5 = new Phaser.Rectangle(34700, 100, 100, 100);

  stalattite5 = game.add.sprite(34700, 200, 'stalattite');
  game.physics.arcade.enable(stalattite5);
  stalattite5.body.velocity.x = 0;
  stalattite5.alignTo(rs5, Phaser.BOTTOM_LEFT);

  roccia5 = game.add.sprite(34600, 1150, 'roccia5');
  game.physics.arcade.enable(roccia5);
  roccia5.body.immovable = true;

  rs6 = new Phaser.Rectangle(34900, 200, 100, 100);

  roccia6 = game.add.sprite(34900, 1050, 'roccia6');
  game.physics.arcade.enable(roccia6);
  roccia6.body.immovable = true;

  rs7 = new Phaser.Rectangle(35700, 100, 100, 100);

  pressure7 = game.add.sprite(35400, 1000, 'bloccomura');
  pressure7.alpha = 0;
  game.physics.arcade.enable(pressure7);
  pressure7.scale.setTo(0.3);

  stalattite7 = game.add.sprite(35700, 200, 'stalattite');
  game.physics.arcade.enable(stalattite7);
  stalattite7.body.velocity.x = 0;
  stalattite7.alignTo(rs7, Phaser.BOTTOM_LEFT);

  roccia7 = game.add.sprite(35400, 1100, 'roccia1');
  game.physics.arcade.enable(roccia7);
  roccia7.body.immovable = true;

  rs8 = new Phaser.Rectangle(36000, 200, 100, 100);

  roccia8 = game.add.sprite(35850, 1250, 'roccia2');
  game.physics.arcade.enable(roccia8);
  roccia8.body.immovable = true;

  pressure9 = game.add.sprite(36300, 900, 'bloccomura');
  pressure9.alpha = 0;
  game.physics.arcade.enable(pressure9);
  pressure9.scale.setTo(0.3);

  rs9 = new Phaser.Rectangle(36500, 200, 100, 100);

  stalattite9 = game.add.sprite(36500, 300, 'stalattite');
  game.physics.arcade.enable(stalattite9);
  stalattite9.body.velocity.x = 0;
  stalattite9.alignTo(rs9, Phaser.BOTTOM_LEFT);

  roccia9 = game.add.sprite(36300, 1100, 'roccia4');
  game.physics.arcade.enable(roccia9);
  roccia9.body.immovable = true;

  rs10 = new Phaser.Rectangle(37000, 200, 100, 100);

  roccia10 = game.add.sprite(36700, 950, 'roccia3');
  game.physics.arcade.enable(roccia10);
  roccia10.body.immovable = true;

  pressure10 = game.add.sprite(36650, 800, 'bloccomura');
  pressure10.alpha = 0;
  game.physics.arcade.enable(pressure10);
  pressure10.scale.setTo(0.3);

  stalattite10 = game.add.sprite(37000, 300, 'stalattite');
  game.physics.arcade.enable(stalattite10);
  stalattite10.body.velocity.x = 0;
  stalattite10.alignTo(rs10, Phaser.BOTTOM_LEFT);

  roccia11 = game.add.sprite(37200, 1000, 'roccia5');
  game.physics.arcade.enable(roccia11);
  roccia11.body.immovable = true;

  roccialunga = game.add.sprite(37650, 1150, 'roccialunga');
  game.physics.arcade.enable(roccialunga);
  roccialunga.body.immovable = true;

  pressurelunga = game.add.sprite(37650, 1000, 'bloccomura');
  pressurelunga.alpha = 0;
  game.physics.arcade.enable(pressurelunga);
  pressurelunga.scale.setTo(0.3);

  rs11 = new Phaser.Rectangle(38000, 200, 100, 100);

  stalattite11 = game.add.sprite(38000, 300, 'stalattite');
  game.physics.arcade.enable(stalattite11);
  stalattite11.body.velocity.x = 0;
  stalattite11.alignTo(rs11, Phaser.BOTTOM_LEFT);

  rs12 = new Phaser.Rectangle(38000, 200, 100, 100);

  pressurelunga2 = game.add.sprite(38000, 1000, 'bloccomura');
  pressurelunga2.alpha = 0;
  game.physics.arcade.enable(pressurelunga2);
  pressurelunga2.scale.setTo(0.3);

  stalattite12 = game.add.sprite(38200, 300, 'stalattite');
  game.physics.arcade.enable(stalattite12);
  stalattite12.body.velocity.x = 0;
  stalattite12.alignTo(rs12, Phaser.BOTTOM_LEFT);

  invisibiroccia1 = game.add.sprite(34450, 750, 'roccia2');
  game.physics.arcade.enable(invisibiroccia1);
  invisibiroccia1.body.immovable = true;

  pressure5 = game.add.sprite(34500, 650, 'bloccomura');
  pressure5.alpha = 0;
  game.physics.arcade.enable(pressure5);
  pressure5.scale.setTo(0.3);

  invisibiroccia2 = game.add.sprite(34910, 600, 'roccia3');
  game.physics.arcade.enable(invisibiroccia2);
  invisibiroccia2.body.immovable = true;
  invisibiroccia2.alpha = 0;

  invisibiroccia4 = game.add.sprite(35350, 500, 'roccia4');
  game.physics.arcade.enable(invisibiroccia4);
  invisibiroccia4.body.immovable = true;
  invisibiroccia4.alpha = 0;

  invisibiroccia3 = game.add.sprite(36500, 1170, 'roccia1');
  game.physics.arcade.enable(invisibiroccia3);
  invisibiroccia3.body.immovable = true;
  invisibiroccia3.alpha = 0;

  invisibiroccia5 = game.add.sprite(34000, 1150, 'roccia5');
  game.physics.arcade.enable(invisibiroccia5);
  invisibiroccia5.body.immovable = true;
  invisibiroccia5.alpha = 0;

  pressure1 = game.add.sprite(33400, 1000, 'bloccomura');
  pressure1.alpha = 0;
  game.physics.arcade.enable(pressure1);
  pressure1.scale.setTo(0.3);

  profeta = game.add.sprite(31300, 1275, 'profeta');
  game.physics.arcade.enable(profeta);
  profeta.inputEnabled = true;
  profeta.scale.setTo(0.85);
  profeta.body.immovable = true;
  profeta.animations.add('idleprofeta');

  //TOTEMsaline

  ts3 = game.add.sprite(22000, 1200, 'ts');
  game.physics.arcade.enable(ts3);
  ts3.animations.add("idlesal3")
  ts3.animations.play('idlesal3', 10, true)
  ts3.body.immovable = true;

  ts5 = game.add.sprite(24000, 1050, 'ts');
  game.physics.arcade.enable(ts5);
  ts5.animations.add("idlesal5")
  ts5.animations.play('idlesal5', 10, true)
  ts5.body.immovable = true;

  ts2 = game.add.sprite(24400, 1400, 'ts');
  game.physics.arcade.enable(ts2);
  ts2.animations.add("idlesal2")
  ts2.animations.play('idlesal2', 10, true)
  ts2.body.immovable = true;

  ts6 = game.add.sprite(26000, 1100, 'ts');
  game.physics.arcade.enable(ts6);
  ts6.animations.add("idlesal6")
  ts6.animations.play('idlesal6', 10, true)
  ts6.body.immovable = true;

  ts1 = game.add.sprite(28000, 1400, 'ts');
  game.physics.arcade.enable(ts1);
  ts1.animations.add("idlesal1")
  ts1.animations.play('idlesal1', 10, true)
  ts1.body.immovable = true;

  ts4 = game.add.sprite(29500, 1100, 'ts');
  game.physics.arcade.enable(ts4);
  ts4.animations.add("idlesal4")
  ts4.animations.play('idlesal4', 10, true)
  ts4.body.immovable = true;

  //TOTEMGROTTA
  tg1 = game.add.sprite(34020, 1050, 'tg');
  tg1.scale.setTo(1);
  game.physics.arcade.enable(tg1);
  tg1.body.immovable = true;
  tg1.animations.add("idle1")
  tg1.animations.play('idle1', 10, true)
  tg1.alpha = 0;

  tgrotta = game.add.sprite(32700, 1350, 'tg');
  tgrotta.scale.setTo(1);
  game.physics.arcade.enable(tgrotta);
  tgrotta.body.immovable = true;
  tgrotta.animations.add("idle1")
  tgrotta.animations.play('idle1', 10, true)

  dbtgrotta = game.add.sprite(0, 0, 'dbtgrotta');
  dbtgrotta.fixedToCamera = true;

  tg2 = game.add.sprite(34620, 1050, 'tg');
  tg2.scale.setTo(1);
  game.physics.arcade.enable(tg2);
  tg2.animations.add("idle2")
  tg2.animations.play('idle2', 10, true)
  tg2.body.immovable = true;
  tg2.alpha = 0;

  tg3 = game.add.sprite(35380, 360, 'tg');
  tg3.scale.setTo(1);
  game.physics.arcade.enable(tg3);
  tg3.animations.add("idle3")
  tg3.animations.play('idle3', 10, true)
  tg3.body.immovable = true;
  tg3.alpha = 0;

  tg4 = game.add.sprite(36550, 1070, 'tg');
  tg4.scale.setTo(1);
  game.physics.arcade.enable(tg4);
  tg4.animations.add("idle4")
  tg4.animations.play('idle4', 10, true)
  tg4.body.immovable = true;
  tg4.alpha = 0;

  tg5 = game.add.sprite(38000, 950, 'tg');
  tg5.scale.setTo(1);
  game.physics.arcade.enable(tg5);
  tg5.animations.add("idle5")
  tg5.animations.play('idle5', 10, true)
  tg5.body.immovable = true;
  tg5.alpha = 0;

  tg3.tint = 0x674896;
  tg5.tint = 0x270096;
  tg2.tint = 0x21ff00;
  tg1.tint = 0xff4896;
  tg2.tint = 0x0000ff;

  lava = game.add.sprite(33150, 1330, 'lava');
  game.physics.arcade.enable(lava);
  lava.body.immovable = true;
  lava.scale.setTo(0.23);
  lava.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  lava.animations.play("lava", 10, true);

  slava = game.add.sprite(33150, 1330, 'lava');
  slava.alignTo(lava, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava);
  slava.body.immovable = true;
  slava.scale.setTo(0.23);
  slava.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava.animations.play("lava", 10, true);

  slava1 = game.add.sprite(33150, 1330, 'lava');
  slava1.alignTo(slava, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava1);
  slava1.body.immovable = true;
  slava1.scale.setTo(0.23);
  slava1.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava1.animations.play("lava", 10, true);

  slava2 = game.add.sprite(33150, 1330, 'lava');
  slava2.alignTo(slava1, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava2);
  slava2.body.immovable = true;
  slava2.scale.setTo(0.23);
  slava2.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava2.animations.play("lava", 10, true);

  slava3 = game.add.sprite(33150, 1330, 'lava');
  slava3.alignTo(slava2, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava3);
  slava3.body.immovable = true;
  slava3.scale.setTo(0.23);
  slava3.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava3.animations.play("lava", 10, true);

  slava4 = game.add.sprite(33150, 1330, 'lava');
  slava4.alignTo(slava3, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava4);
  slava4.body.immovable = true;
  slava4.scale.setTo(0.23);
  slava4.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava4.animations.play("lava", 10, true);

  slava5 = game.add.sprite(33150, 1330, 'lava');
  slava5.alignTo(slava4, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava5);
  slava5.body.immovable = true;
  slava5.scale.setTo(0.23);
  slava5.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava5.animations.play("lava", 10, true);

  slava6 = game.add.sprite(33150, 1330, 'lava');
  slava6.alignTo(slava5, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava6);
  slava6.body.immovable = true;
  slava6.scale.setTo(0.23);
  slava6.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava6.animations.play("lava", 10, true);

  slava7 = game.add.sprite(33150, 1330, 'lava');
  slava7.alignTo(slava6, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava7);
  slava7.body.immovable = true;
  slava7.scale.setTo(0.23);
  slava7.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava7.animations.play("lava", 10, true);

  slava8 = game.add.sprite(33150, 1330, 'lava');
  slava8.alignTo(slava7, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava8);
  slava8.body.immovable = true;
  slava8.scale.setTo(0.23);
  slava8.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava8.animations.play("lava", 10, true);

  slava9 = game.add.sprite(33150, 1330, 'lava');
  slava9.alignTo(slava8, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava9);
  slava9.body.immovable = true;
  slava9.scale.setTo(0.23);
  slava9.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava9.animations.play("lava", 10, true);

  slava10a = game.add.sprite(35150, 1330, 'lava');
  slava10a.alignTo(slava9, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava10a);
  slava10a.body.immovable = true;
  slava10a.scale.setTo(0.23);
  slava10a.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava10a.animations.play("lava", 10, true);

  slava11a = game.add.sprite(33150, 1330, 'lava');
  slava11a.alignTo(slava10a, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava11a);
  slava11a.body.immovable = true;
  slava11a.scale.setTo(0.23);
  slava11a.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava11a.animations.play("lava", 10, true);

  slava12a = game.add.sprite(33150, 1330, 'lava');
  slava12a.alignTo(slava11a, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava12a);
  slava12a.body.immovable = true;
  slava12a.scale.setTo(0.23);
  slava12a.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava12a.animations.play("lava", 10, true);

  slava13 = game.add.sprite(33150, 1330, 'lava');
  slava13.alignTo(slava12a, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava13);
  slava13.body.immovable = true;
  slava13.scale.setTo(0.23);
  slava13.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava13.animations.play("lava", 10, true);

  slava14 = game.add.sprite(33150, 1330, 'lava');
  slava14.alignTo(slava13, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava14);
  slava14.body.immovable = true;
  slava14.scale.setTo(0.23);
  slava14.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava14.animations.play("lava", 10, true);

  slava15 = game.add.sprite(33150, 1330, 'lava');
  slava15.alignTo(slava14, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava15);
  slava15.body.immovable = true;
  slava15.scale.setTo(0.23);
  slava15.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava15.animations.play("lava", 10, true);

  slava16 = game.add.sprite(33150, 1330, 'lava');
  slava16.alignTo(slava15, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava16);
  slava16.body.immovable = true;
  slava16.scale.setTo(0.23);
  slava16.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava16.animations.play("lava", 10, true);

  slava17 = game.add.sprite(33150, 1330, 'lava');
  slava17.alignTo(slava16, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava17);
  slava17.body.immovable = true;
  slava17.scale.setTo(0.23);
  slava17.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava17.animations.play("lava", 10, true);

  slava18 = game.add.sprite(33150, 1330, 'lava');
  slava18.alignTo(slava17, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava18);
  slava18.body.immovable = true;
  slava18.scale.setTo(0.23);
  slava18.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava18.animations.play("lava", 10, true);

  slava19 = game.add.sprite(33150, 1330, 'lava');
  slava19.alignTo(slava18, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava19);
  slava19.body.immovable = true;
  slava19.scale.setTo(0.23);
  slava19.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava19.animations.play("lava", 10, true);

  slava20 = game.add.sprite(33150, 1330, 'lava');
  slava20.alignTo(slava19, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava20);
  slava20.body.immovable = true;
  slava20.scale.setTo(0.23);
  slava20.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava20.animations.play("lava", 10, true);

  slava21 = game.add.sprite(33150, 1330, 'lava');
  slava21.alignTo(slava20, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava21);
  slava21.body.immovable = true;
  slava21.scale.setTo(0.23);
  slava21.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava21.animations.play("lava", 10, true);

  slava22 = game.add.sprite(33150, 1330, 'lava');
  slava22.alignTo(slava21, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava22);
  slava22.body.immovable = true;
  slava22.scale.setTo(0.23);
  slava22.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava22.animations.play("lava", 10, true);

  slava23 = game.add.sprite(33150, 1330, 'lava');
  slava23.alignTo(slava22, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava23);
  slava23.body.immovable = true;
  slava23.scale.setTo(0.23);
  slava23.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava23.animations.play("lava", 10, true);

  slava24 = game.add.sprite(33150, 1330, 'lava');
  slava24.alignTo(slava23, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava24);
  slava24.body.immovable = true;
  slava24.scale.setTo(0.23);
  slava24.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava24.animations.play("lava", 10, true);

  slava25 = game.add.sprite(33150, 1330, 'lava');
  slava25.alignTo(slava24, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava25);
  slava25.body.immovable = true;
  slava25.scale.setTo(0.23);
  slava25.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava25.animations.play("lava", 10, true);

  slava26 = game.add.sprite(33150, 1330, 'lava');
  slava26.alignTo(slava25, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava26);
  slava26.body.immovable = true;
  slava26.scale.setTo(0.23);
  slava26.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava26.animations.play("lava", 10, true);

  slava27 = game.add.sprite(33150, 1330, 'lava');
  slava27.alignTo(slava26, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava27);
  slava27.body.immovable = true;
  slava27.scale.setTo(0.23);
  slava27.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava27.animations.play("lava", 10, true);

  slava28 = game.add.sprite(33150, 1330, 'lava');
  slava28.alignTo(slava27, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava28);
  slava28.body.immovable = true;
  slava28.scale.setTo(0.23);
  slava28.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava28.animations.play("lava", 10, true);

  slava29 = game.add.sprite(33150, 1330, 'lava');
  slava29.alignTo(slava28, Phaser.RIGHT_TOP);
  game.physics.arcade.enable(slava29);
  slava29.body.immovable = true;
  slava29.scale.setTo(0.23);
  slava29.animations.add("lava", [0, 1, 2, 3, 4, 5]);
  slava29.animations.play("lava", 10, true);

  roccia1 = game.add.sprite(33100, 1340, 'roccia1');
  game.physics.arcade.enable(roccia1);
  roccia1.body.immovable = true;

    rc = new Phaser.Rectangle(200, 1490, 2400, 20);
    carrettoc.alignTo(rc, Phaser.TOP_LEFT);

  rocciafinale = game.add.sprite(38700, 1350, 'rocciafinale');
  game.physics.arcade.enable(rocciafinale);
  rocciafinale.body.immovable = true;

  pressurefinale = game.add.sprite(38800, 1300, 'bloccomura');
  pressurefinale.alpha = 0;
  game.physics.arcade.enable(pressurefinale);
  pressurefinale.scale.setTo(1);

  mortegrotta = game.add.sprite(33200, 1450, 'mortegrotta');
  game.physics.arcade.enable(mortegrotta);
  mortegrotta.scale.setTo(0.63);
  mortegrotta.alpha = 0;
  mortegrotta.body.immovable = true;

  puntini1 = game.add.sprite(17990, 1210, 'puntini');
    puntini1.visible = false;
    puntini1.scale.setTo(0.3);
    puntini1.inputEnabled = true;
    puntini1.events.onInputDown.add(abilitadialogobox)

    // SCI guardia
      puntini2 = game.add.sprite(19390, 1210, 'puntini');
      puntini2.visible = false;
      puntini2.scale.setTo(0.3);
      puntini2.inputEnabled = true;
      puntini2.events.onInputDown.add(cliccaclicca);

      // SCI vecchio 1

      puntini3 = game.add.sprite(16030, 1210, 'puntini');
      puntini3.visible = false;
      puntini3.scale.setTo(0.3);
      puntini3.inputEnabled = true;
      puntini3.events.onInputDown.add(claustrofobia);

        // SCI vendor2 2

      puntini6 = game.add.sprite(17110, 1195, 'puntini');
      puntini6.visible = false;
      puntini6.scale.setTo(0.3);
      puntini6.inputEnabled = true;
      puntini6.events.onInputDown.add(pepata)

sfondofinale = game.add.sprite(39600, 300, 'sfondofinale');
sfondofinale.scale.setTo(0.9);

  portafinaledietro = game.add.sprite(39600, 630, 'fineingressogrottadietro');
  portafinaledietro.scale.setTo(0.8);

  // CENTRARE ALLA CAMERA
  //si = game.add.sprite(game.camera.x + (game.width/2), game.camera.y + (game.height/2), 'si');
  //si.fixedToCamera = true;

  tio = game.add.sprite(45400, 750, 'tio');
  tio.animations.add("idletio", [0, 1, 2, 3, 4, 5, 4, 3, 2, 1]);
  sciogli = tio.animations.add("scioglitiox", [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
  tio.play("idletio", 10, true);
  tio.visible = false;

  marble = game.add.filter('Marble', 800, 600);
  marble.alpha = 0.01;
  marble.intensity = 0.10;

  filter = game.add.filter('Marble', 800, 600);
  filter.alpha = 0.2;

  // PLAYERQUI
  player = game.add.sprite(00, 1200, 'player');
  player.animations.add("idledx", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  player.animations.add("idlesx", [14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25]);
  player.animations.add("dx", [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
  player.animations.add("sx", [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]);
  player.animations.add("fdx", [56, 57, 58, 59, 60]);
  player.animations.add("saltodx", [112, 113, 114, 115]);
  player.animations.add("saltosx", [126, 127, 128, 129]);
  player.animations.add("fermodx", [60]);
  player.animations.add("fermosx", [98]);
  player.animations.add("fsx", [63, 64, 65, 66, 67]);
  player.animations.add("fsx", [68, 69, 70, 71, 72]);
  player.animations.add("lama", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  player.animations.add("jlama", [12, 13, 14, 15]);
  pietra = player.animations.add("pietra", [154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165, 165]);

  stelline = game.add.sprite(45400, 750, 'stelline');
  stelline.animations.add("stellineloop");
  stelline.animations.play("stellineloop", 7, true);
  stelline.visible = false;

  game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;
  player.body.gravity.y = 800;
  player.alpha = 0;
  player.inputEnabled = true;

  pressuretio = game.add.sprite(41850, 1400, 'bloccomura');
  game.physics.arcade.enable(pressuretio);
  pressuretio.scale.setTo(1);
  pressuretio.alpha = 0;

  tipregofunziona = game.add.sprite(18900, 1200, 'bloccomura');
  game.physics.arcade.enable(tipregofunziona);
  tipregofunziona.alpha = 0;
  tipregofunziona.scale.setTo(0.2);

  ingressogrottadavanti = game.add.sprite(31000, 670, 'ingressogrottadavanti');
  game.physics.arcade.enable(ingressogrottadavanti);
  ingressogrottadavanti.scale.setTo(0.85);
  ingressogrottadavanti.body.immovable = true;

  iconachacha = game.add.sprite(900, 10, 'achachasx');
  iconachacha.visible = false;
  iconachacha.fixedToCamera = true;
  iconachacha.scale.setTo(0.05);

  sfondodialogo = game.add.sprite(0, 0, 'sfondodialogo');
  iconachacha.scale.setTo(0.4);
  sfondodialogo.fixedToCamera = true;
  sfondodialogo.visible = false;

  iniziocorsa = game.add.sprite(19900, 1100, 'bloccomura');
  game.physics.arcade.enable(iniziocorsa);
  iniziocorsa.alpha = 0;
  iniziocorsa.scale.setTo(3);
  iniziocorsa.body.immovable = true;

  brodi = game.add.sprite(19900, 1100, 'bloccomura');
  game.physics.arcade.enable(brodi);
  brodi.scale.setTo(0.39);
  brodi.alpha = 0;

  portafinaledavanti = game.add.sprite(39560, 718, 'fineingressogrottadavanti');
  portafinaledavanti.scale.setTo(0.8);

  coprilama = game.add.sprite(29780, 800, 'coprilama');
  coprilama.scale.setTo(0.3);

  finecorsa = game.add.sprite(30070, 1200, 'bloccomura');
  game.physics.arcade.enable(finecorsa);
  finecorsa.alpha = 0;
  finecorsa.scale.setTo(0.1);
  finecorsa.body.immovable = true;

  finecorsa2 = game.add.sprite(30050, 1300, 'bloccomura');
  game.physics.arcade.enable(finecorsa2);
  finecorsa2.alpha = 0;
  finecorsa2.scale.setTo(0.1);
  finecorsa2.body.immovable = true;

  finecorsa3 = game.add.sprite(30020, 1400, 'bloccomura');
  game.physics.arcade.enable(finecorsa3);
  finecorsa3.alpha = 0;
  finecorsa3.scale.setTo(0.1);
  finecorsa3.body.immovable = true;

  finecorsa4 = game.add.sprite(30070, 900, 'bloccomura');
  game.physics.arcade.enable(finecorsa4);
  finecorsa4.alpha = 0;
  finecorsa4.scale.setTo(0.1);
  finecorsa4.body.immovable = true;

  finecorsa5 = game.add.sprite(30070, 1100, 'bloccomura');
  game.physics.arcade.enable(finecorsa5);
  finecorsa5.alpha = 0;
  finecorsa5.scale.setTo(0.1);
  finecorsa5.body.immovable = true;

  nonritorno = game.add.sprite(29400, 1000, 'bloccomura');
  game.physics.arcade.enable(nonritorno);
  nonritorno.alpha = 0;
  nonritorno.tint = 0x00FF00
  nonritorno.scale.setTo(3);
  nonritorno.body.immovable = true;
  nonritorno.visible = false;

  camminata = game.add.sprite(-500, 1490, 'pavmorte');
  game.physics.arcade.enable(camminata);
  camminata.alpha = 0;
  camminata.tint = 0xff0000;
  camminata.body.immovable = true;

  camminata1 = game.add.sprite(0, 1490, 'pavmorte');
  game.physics.arcade.enable(camminata1);
  camminata1.alpha = 0;
  camminata1.alignTo(camminata, Phaser.RIGHT_TOP);
  camminata1.body.immovable = true;

  camminata2 = game.add.sprite(0, 1490, 'pavmorte');
  game.physics.arcade.enable(camminata2);
  camminata2.alpha = 0;
  camminata2.alignTo(camminata1, Phaser.RIGHT_TOP);
  camminata2.body.immovable = true;

  camminata3 = game.add.sprite(20000, 1490, 'pavmorte');
  game.physics.arcade.enable(camminata3);
  camminata3.alpha = 0;
  camminata3.alignTo(camminata2, Phaser.RIGHT_TOP);
  camminata3.body.immovable = true;

  pavlama = game.add.sprite(20000, 1360, 'pavmorte');
  game.physics.arcade.enable(pavlama);
  pavlama.alpha = 0;
  pavlama.body.immovable = true;
  pavlama.scale.setTo(0.63);

  //saline

  sassosal = game.add.sprite(19900, 820, 'sassosal');
  sassosal.scale.setTo(0.7);

  dbprofeta1 = game.add.sprite(0, 0, 'dbprofeta1');
  game.physics.arcade.enable(dbprofeta1);
  dbprofeta1.visible = false;
  dbprofeta1.inputEnabled = true;
  dbprofeta1.fixedToCamera = true;
  dbprofeta1.events.onInputDown.add(funzioneavanti1);

  dbprofetabravino = game.add.sprite(0, 0, 'dbprofeta2.1');
  game.physics.arcade.enable(dbprofetabravino);
  dbprofetabravino.visible = false;
  dbprofetabravino.inputEnabled = true;
  dbprofetabravino.fixedToCamera = true;
  dbprofetabravino.events.onInputDown.add(funzioneavanti2);

  playertornato = game.add.sprite(30370, 1100, 'bloccomura');
  game.physics.arcade.enable(playertornato);
  playertornato.alpha = 0;
  playertornato.scale.setTo(1);
  playertornato.body.immovable = true;

  dbprofetabravo = game.add.sprite(0, 0, 'dbprofeta2.2');
  game.physics.arcade.enable(dbprofetabravo);
  dbprofetabravo.visible = false;
  dbprofetabravo.inputEnabled = true;
  dbprofetabravo.fixedToCamera = true;
  dbprofetabravo.events.onInputDown.add(funzioneavanti2);

  dbprofetabravissimo = game.add.sprite(0, 0, 'dbprofeta2.3');
  game.physics.arcade.enable(dbprofetabravissimo);
  dbprofetabravissimo.visible = false;
  dbprofetabravissimo.inputEnabled = true;
  dbprofetabravissimo.fixedToCamera = true;
  dbprofetabravissimo.events.onInputDown.add(funzioneavanti2);

  dbprofeta3 = game.add.sprite(0, 0, 'dbprofeta3');
  game.physics.arcade.enable(dbprofeta3);
  dbprofeta3.visible = false;
  dbprofeta3.inputEnabled = true;
  dbprofeta3.fixedToCamera = true;

  offri = game.add.sprite(355, 440, 'offridevozione');
  offri.inputEnabled = true;
  offri.visible = false;
  offri.fixedToCamera = true;
  offri.events.onInputDown.add(offrix);

  //profeta
    puntini4 = game.add.sprite(31340, 1140, 'puntini');
    puntini4.visible = false;
    puntini4.scale.setTo(0.3);
    puntini4.inputEnabled = true;
    puntini4.events.onInputDown.add(brontosauro);

  bloccogrotta = game.add.sprite(31500, 1000, 'bloccomura');
  bloccogrotta.tint = 0XFF0000
  game.physics.arcade.enable(bloccogrotta);
  bloccogrotta.alpha = 0;
  bloccogrotta.visible = true;
  bloccogrotta.body.immovable = true;

  // SCI vecchio 2
  puntini5 = game.add.sprite(18740, 1200, 'puntini');
  puntini5.visible = false;
  puntini5.scale.setTo(0.3);
  puntini5.inputEnabled = true;
  puntini5.events.onInputDown.add(coccodrillo);

  statuatio = game.add.sprite(41900, 800, 'statuatio');
  game.physics.arcade.enable(statuatio);
  statuatio.scale.setTo(0.5);
  statuatio.body.immovable = true;

  tio = game.add.sprite(41000, 750, 'tio');
  tio.animations.add("idletio", [0, 1, 2, 3, 4, 5, 4, 3, 2, 1]);
  sciogli = tio.animations.add("scioglitiox", [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
  tio.play("idletio", 10, true);
  tio.visible = false;

  hud = game.add.sprite(20, 20, 'hud');
  hud.fixedToCamera = true;
  hud.scale.setTo(0.8);
  hud.animations.add('0', [0]);
  hud.animations.add('1', [1]);
  hud.animations.add('2', [2]);
  hud.animations.add('3', [3]);
  hud.animations.add('4', [4]);
  hud.animations.add('5', [5]);
  hud.animations.add('6', [6]);

  db0 = game.add.sprite(0, 0, 'dbt1');
  db0.fixedToCamera = true;

  db1 = game.add.sprite(0, 0, 't2');
  db1.fixedToCamera = true;

  db2 = game.add.sprite(0, 0, 't3');
  db2.fixedToCamera = true;

  db3 = game.add.sprite(0, 0, 't4');
  db3.fixedToCamera = true;

  db4 = game.add.sprite(0, 0, 't5');
  db4.fixedToCamera = true;


  db5 = game.add.sprite(0, 0, 't6');
  db5.fixedToCamera = true;

  muro4 = game.add.sprite(18200, 941, 'muro4');
  muro4.scale.setTo(0.5);

  muro7 = game.add.sprite(18200, 625, 'muro7');
  muro3 = game.add.sprite(18400, 1200, 'muro3');
  muro3.alignTo(muro2, Phaser.RIGHT_TOP);
  muro3.scale.setTo(0.5);

  muro5 = game.add.sprite(18400, 1200, 'muro5');
  muro5.alignTo(muro4, Phaser.RIGHT_TOP);
  muro5.scale.setTo(0.5);

  muro6 = game.add.sprite(18200, 625, 'muro6');
  muro6.scale.setTo(0.5);

  muro7.alignTo(muro6, Phaser.RIGHT_TOP);
  muro7.scale.setTo(0.5);

  sparalosbirro = game.add.sprite(19415, 1050, 'achachabull');
  game.physics.arcade.enable(sparalosbirro);
  sparalosbirro.visible = false;
  sparalosbirro.body.immovable = true;
  sparalosbirro.body.velocity.x = 0;

  dbstatuatio = game.add.sprite(0, 0, 'dbtiostatua1');
  game.physics.arcade.enable(dbstatuatio);
  dbstatuatio.visible = false;
  dbstatuatio.inputEnabled = true;
  dbstatuatio.fixedToCamera = true;
  dbstatuatio.events.onInputDown.add(chiudidialogostatuatio);

  sfondofinto = game.add.sprite(31450, 200, 'bloccomura');
  game.physics.arcade.enable(sfondofinto);
  sfondofinto.alpha = 0;
  sfondofinto.scale.setTo(10);
  sfondofinto.body.immovable = true;

  dbtio1 = game.add.sprite(0, 0, 'dbtio1');
  dbtio1.visible = false;
  dbtio1.inputEnabled = true;
  dbtio1.fixedToCamera = true;
  dbtio1.events.onInputDown.add(avantio);

  //GRAZIEMICHIBBUNO

  dbtio2 = game.add.sprite(0, 0, 'dbtio2');
  dbtio2.visible = false;
  dbtio2.inputEnabled = true;
  dbtio2.fixedToCamera = true;

  notio = game.add.sprite(475, 390, 'notio');
  notio.visible = false;
  notio.inputEnabled = true;
  notio.fixedToCamera = true;
  notio.events.onInputDown.add(chiuditio);

  dbvendor1 = game.add.sprite(0, 0, 'dbvendor');
  game.physics.arcade.enable(dbvendor1);
  dbvendor1.visible = false;
  dbvendor1.fixedToCamera = true;

  dbvecio = game.add.sprite(0, 0, 'dbvecio1');
  game.physics.arcade.enable(dbvecio);
  dbvecio.visible = false;
  dbvecio.fixedToCamera = true;
  dbvecio.inputEnabled = true;
  dbvecio.fixedToCamera = true;
  dbvecio.events.onInputDown.add(chiudivecio1);

  dbvecio2 = game.add.sprite(0, 0, 'dbvecio2');
  game.physics.arcade.enable(dbvecio2);
  dbvecio2.visible = false;
  dbvecio2.fixedToCamera = true;
  dbvecio2.inputEnabled = true;
  dbvecio2.fixedToCamera = true;
  dbvecio2.events.onInputDown.add(chiudivecio2);


  si = game.add.sprite(350, 440, 'si');
  si.visible = false;
  si.fixedToCamera = true;
  si.inputEnabled = true;
  si.events.onInputDown.add(compra);

  no = game.add.sprite(540, 440, 'no');
  no.visible = false;
  no.fixedToCamera = true;
  no.inputEnabled = true;
  no.events.onInputDown.add(chiudi);

  game.time.events.add(300, function() {
    opendoor()
  });

  dbvendor2 = game.add.sprite(0, 0, 'dbvendor2');
  game.physics.arcade.enable(dbvendor2);
  dbvendor2.visible = false;
  dbvendor2.fixedToCamera = true;
  dbvendor2.fixedToCamera = true;
  dbvendor2.inputEnabled = true;
  dbvendor2.events.onInputDown.add(chiudivendor2);

  attackbutton = game.add.sprite(19400, 880, 'lanciare');
  attackbutton.visible = true;
  attackbutton.scale.setTo(0.25);
  attackbutton.inputEnabled = true;
  attackbutton.events.onInputDown.add(enableattack);

  dbguardia = game.add.sprite(0, 0, 'dbguardia');
  game.physics.arcade.enable(dbguardia);
  dbguardia.visible = false;
  dbguardia.fixedToCamera = true;
  dbguardia.inputEnabled = true;
  dbguardia.fixedToCamera = true;
  dbguardia.events.onInputDown.add(chiudiguardia);

  dbguardia2 = game.add.sprite(0, 0, 'dbguardia2');
  game.physics.arcade.enable(dbguardia2);
  dbguardia2.visible = false;
  dbguardia2.fixedToCamera = true;
  dbguardia2.inputEnabled = true;
  dbguardia2.fixedToCamera = true;
  dbguardia2.events.onInputDown.add(chiudiguardia2);

  sfondotio = game.add.sprite(0, 0, 'sfondotio');
  sfondotio.visible = false;
  sfondotio.fixedToCamera = true;

  falsato = game.add.sprite(41776, 1347, 'distruggi');
  game.physics.arcade.enable(falsato);
  falsato.alpha = 0;
  rompere = falsato.animations.add("rompi", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
  falsato.animations.add("rompifine", [20]);

  //MENU
  menu = game.add.sprite(0, 0, 'menu');
  menu.visible = false;
  menu.fixedToCamera = true;

  continua = game.add.sprite(420, 225, 'tornaalteatro');
  //game.input.onDown.add(unpause);
  continua.events.onInputDown.add(continuagioco);
  continua.inputEnabled = true;
  continua.visible = false;
  continua.fixedToCamera = true;
  //continua.scale.setTo(0.8);

  tornaalteatro = game.add.sprite(330, 315, 'continua');
  //game.input.onDown.add(unpause);
  //tornaalteatro.events.onInputDown.add(tornaalteatro);
  tornaalteatro.inputEnabled = true;
  tornaalteatro.visible = false;
  tornaalteatro.fixedToCamera = true;
  //tornaalteatro.on('pointerup', openexternallink)

  badend = game.add.sprite(0, 0, 'badend');
  badend.visible = false;
  badend.scale.setTo(1);
  badend.fixedToCamera = true;

  buonafine = game.add.sprite(0, 0, 'goodend');
  buonafine.visible = false;
  buonafine.scale.setTo(1);
  buonafine.fixedToCamera = true;
}

function update() {

  {
    game.physics.arcade.collide(player, carretto);

    game.physics.arcade.collide(brodi, ts2, prenditotem, gangang);
    game.physics.arcade.collide(brodi, ts3, prenditotem, gangang);
    game.physics.arcade.collide(brodi, ts4, prenditotem, gangang);
    game.physics.arcade.collide(brodi, ts5, prenditotem, gangang);
    game.physics.arcade.collide(brodi, ts6, prenditotem, gangang);
    game.physics.arcade.collide(brodi, ts1, prenditotem, gangang);
    game.physics.arcade.collide(player, invisibiroccia1);
    game.physics.arcade.collide(player, invisibiroccia2, stopplease2);
    game.physics.arcade.collide(player, invisibiroccia3, stopplease3);
    game.physics.arcade.collide(player, invisibiroccia4, stopplease4);
    game.physics.arcade.collide(player, invisibiroccia5, stopplease5);

    game.physics.arcade.collide(player, tg1, prenditotem, gangang);
    game.physics.arcade.collide(player, tgrotta, prenditotem, flashtigrotta);
    game.physics.arcade.collide(player, tgrotta, checkpointgrottax);
    game.physics.arcade.collide(player, tg2, prenditotem, gangang);
    game.physics.arcade.collide(player, tg3, prenditotem, gangang);
    game.physics.arcade.collide(player, tg4, prenditotem, gangang);
    game.physics.arcade.collide(player, tg5, prenditotem, gangang);
    //game.physics.arcade.collide(player, tg6, prenditotem);

    game.physics.arcade.collide(player, nonritorno);
    game.physics.arcade.overlap(player, pressure1, attivacaduta1);
    game.physics.arcade.overlap(player, pressuretio, dialogostatuatio);
    game.physics.arcade.overlap(player, pressure4, attivacaduta4);
    game.physics.arcade.overlap(player, pressure5, attivacaduta5);
    game.physics.arcade.overlap(player, pressure7, attivacaduta7);
    game.physics.arcade.overlap(player, pressure9, attivacaduta9);
    game.physics.arcade.overlap(player, pressure10, attivacaduta10);
    game.physics.arcade.overlap(player, pressurelunga, attivacaduta11);
    game.physics.arcade.overlap(player, pressurelunga2, attivacaduta12);
    game.physics.arcade.overlap(player, pressurefinale, pullappiamo);

    game.physics.arcade.collide(player, stalattite1, mori);
    game.physics.arcade.collide(player, stalattite4, mori);
    game.physics.arcade.collide(player, stalattite5, mori);
    game.physics.arcade.collide(player, stalattite7, mori);
    game.physics.arcade.collide(player, stalattite9, mori);
    game.physics.arcade.collide(player, stalattite10, mori);
    game.physics.arcade.collide(player, stalattite11, mori);
    game.physics.arcade.collide(player, stalattite12, mori);
    //game.physics.arcade.collide(roccia1, sottodietr);

    game.physics.arcade.collide(player, roccia1);
    game.physics.arcade.collide(player, roccia2);
    game.physics.arcade.collide(player, roccia3);
    game.physics.arcade.collide(player, roccia4);
    game.physics.arcade.collide(player, roccia5, stopplease05);
    game.physics.arcade.collide(player, roccia6);
    game.physics.arcade.collide(player, roccia7);
    game.physics.arcade.collide(player, roccia8);
    game.physics.arcade.collide(player, roccia9);
    game.physics.arcade.collide(player, roccia10);
    game.physics.arcade.collide(player, roccia11);
    game.physics.arcade.collide(player, roccialunga);
    game.physics.arcade.collide(player, rocciafinale);

    game.physics.arcade.collide(player, camminata1);
    game.physics.arcade.collide(player, camminata2);
    game.physics.arcade.collide(player, camminata3);
    game.physics.arcade.collide(player, camminata);
    game.physics.arcade.collide(player, pavlama);
    game.physics.arcade.collide(player, bloccogrotta);
    game.physics.arcade.collide(fintoplayer, camminata);
    game.physics.arcade.collide(fintoplayer, iniziogioco, cheilgiocoabbiainizio);


    //game.physics.arcade.collide(weapon.bullets, guardia, stordisci2);
    game.physics.arcade.collide(sparalosbirro, guardia, stordisci2);
    game.physics.arcade.collide(player, pavmorte, morte);

    game.physics.arcade.collide(player, mortegrotta, mortegrottagang);

    game.physics.arcade.collide(player, rettangoloinvisivile);
    game.physics.arcade.overlap(player, iniziocorsa, speeed);
    game.physics.arcade.overlap(player, finecorsa, sloow);
    game.physics.arcade.overlap(player, finecorsa2, sloow);
    game.physics.arcade.overlap(player, finecorsa3, sloow);
    game.physics.arcade.overlap(player, finecorsa4, sloow);
    game.physics.arcade.overlap(player, finecorsa5, sloow);
    game.physics.arcade.overlap(player, finecorsa, scendilama);
    game.physics.arcade.overlap(player, finecorsa2, scendilama);
    game.physics.arcade.overlap(player, finecorsa3, scendilama);
    game.physics.arcade.overlap(player, finecorsa4, scendilama);
    game.physics.arcade.overlap(player, finecorsa5, scendilama)
    game.physics.arcade.overlap(player, playertornato, tuttonormale);
    game.physics.arcade.collide(player, calpestabile);
    game.physics.arcade.collide(player, calpestabile2);
    game.physics.arcade.collide(player, calpestabile3);
    game.physics.arcade.collide(player, calpestabile4);
    game.physics.arcade.collide(player, calpestabile5);
    game.physics.arcade.collide(player, calpestabile6);
    game.physics.arcade.collide(player, calpestabile7);

    game.physics.arcade.collide(player, pocoprima3);
    game.physics.arcade.collide(player, pocoprima5);
    game.physics.arcade.collide(player, pocoprima7);
    game.physics.arcade.collide(player, pocoprima9);
    game.physics.arcade.collide(player, pocoprima1);
    game.physics.arcade.collide(player, muro8);

    game.physics.arcade.collide(player, v1);
    game.physics.arcade.collide(player, v2);
    game.physics.arcade.collide(player, v3);
    game.physics.arcade.collide(player, v4);
    game.physics.arcade.collide(player, v5, ollareollare);
    game.physics.arcade.collide(player, v6);
    game.physics.arcade.collide(player, v7);
    game.physics.arcade.collide(player, v8);
    game.physics.arcade.collide(player, v9, ollareollare);
    game.physics.arcade.collide(player, v10);
    game.physics.arcade.collide(player, v11);
    game.physics.arcade.collide(player, v12);
    game.physics.arcade.collide(player, v13);
    game.physics.arcade.collide(player, v14);
    game.physics.arcade.collide(player, v15, ollareollare);
    game.physics.arcade.collide(player, v16);
    game.physics.arcade.collide(player, v17);
    game.physics.arcade.collide(player, v18);
    game.physics.arcade.collide(player, v19, ollareollare);
    game.physics.arcade.collide(player, v20);
    game.physics.arcade.collide(player, v21);
    game.physics.arcade.collide(player, v22);
    game.physics.arcade.collide(player, v23);
    game.physics.arcade.collide(player, v24, ollareollare);
    game.physics.arcade.collide(player, v25);
    game.physics.arcade.collide(player, v26, ollareollare);
    game.physics.arcade.collide(player, v27);
    game.physics.arcade.collide(player, v28, ollareollare);
    game.physics.arcade.collide(player, v29);
    game.physics.arcade.collide(player, v30);
    game.physics.arcade.collide(player, v31);
    game.physics.arcade.collide(player, pav1);

    game.physics.arcade.collide(player, t1, prenditotem, checkpoint0);
    game.physics.arcade.collide(player, t0, prenditotem, checkpoint1);
    game.physics.arcade.collide(player, t3, prenditotem, checkpoint3);
    game.physics.arcade.collide(player, t4, prenditotem, checkpoint4);
    game.physics.arcade.collide(player, statuatio);
    game.physics.arcade.collide(player, t5, prenditotem, checkpoint5);
    game.physics.arcade.collide(player, t7, prenditotem, checkpoint7);
    game.physics.arcade.collide(player, t8, prenditotem, checkpoint8);

    game.physics.arcade.collide(player, t1, ganganga);
    game.physics.arcade.collide(player, t0, ganganga);
    game.physics.arcade.collide(player, t3, ganganga);
    game.physics.arcade.collide(player, t4, ganganga);
    game.physics.arcade.collide(player, t5, ganganga);
    game.physics.arcade.collide(player, t7, ganganga);
    game.physics.arcade.collide(player, t8, ganganga);

    //game.physics.arcade.collide(player, t9, prenditotem, checkpoint9);

  }

  if (eddy) {

    game.camera.flash(0xff2660, 400)

  }


  if (ananas)

    profeta.play("idleprofeta", 10, true)

  if (volotroppo)

    seguibimbo()

  if (bellaperifra && (morningjogging)) {

    baciperugina();

  }

  if (cacao)

    vecio.play("idlevecio", 10, true)

  if (avocado)

    guardia.play("idleguardia", 10, true)

  if (papaya)

    venditore1.play("idlevendor", 10, true)

  if (trukk)

    vendor2.play("vendor2", 10, true)

  if (fine && (counter <= 5)) {

    game.time.events.add(100, function() {
      pietrificazione()

    });

  }

  if (fine && (counter == 6)) {

    game.time.events.add(2000, function() {
      distruggi()
    });

  }

  if (evidenziatore && (evidenziatorecounter > 0)) {

    aprichacha.visible = true;
    attackbutton.destroy();
    vecio.x = 18730;
    dbvecio.destroy();
    guardia.play('stordito2', 10, false);
    aprichacha.play('aprichacha', 10, false);
    booleanavecio = true;

  }

  if (counter == 4) {

    hud.animations.play("4", 7, true);
  }

  if (counter == 1) {

    hud.animations.play("1", 7, true);
  }
  if (counter == 2) {

    hud.animations.play("2", 7, true);
  }
  if (counter == 3) {
    hud.animations.play("3", 7, true);
  }

  if (counter == 0) {

    hud.animations.play("0", 7, true);
  }

  if (counter == 5) {

    hud.animations.play("5", 7, true);
  }
  if (counter == 6) {
    hud.animations.play("6", 7, true);
  }

  if (comprato) {

    game.time.events.add(300, function() {
      chiuditutto()
    });

  }

  dvendorx = player.x - venditore1.x
  dvendory = player.y - venditore1.y

  if (dvendorx * dvendorx + dvendory * dvendory < 50000) {
    aggrovendor = true
  }
  if (dvendorx * dvendorx + dvendory * dvendory > 50000) {
    aggrovendor = false
  }

  if (aggrovendor && (wakemeupwhenseptemberends))

    puntini1.visible = true;

  if (aggrovendor && (abilitadialogo)) {
    if (player.x - venditore1.x > 5) {
      dbvendor1.visible = true;
      si.visible = true;
      no.visible = true;
    }

    if (player.x - venditore1.x < -5) {
      dbvendor1.visible = true;
      si.visible = true;
      no.visible = true;
    }

    if (player.y - venditore1.y > 5) {
      dbvendor1.visible = true;
      si.visible = true;
      no.visible = true;
    }

    if (player.y - venditore1.y < -5) {
      dbvendor1.visible = true;
      si.visible = true;
      no.visible = true;
    }
  } else {
    abilitadialogo = false;
    dbvendor1.visible = false;
    si.visible = false;
    no.visible = false;
  }

  if (!aggrovendor) {

    puntini1.visible = false;
  }

    if (notio.input.pointerOver()) {
      notio.tint = 0xff2660
    } else {
      notio.tint = 0xFFFFFF;
    }

  dguardiax = player.x - guardia.x
  dguardiay = player.y - guardia.y

  if (dguardiax * dguardiax + dguardiay * dguardiay < 50000) {
    aggroguardia = true
    vistoguardia = true
  }
  if (dguardiax * dguardiax + dguardiay * dguardiay > 50000) {
    aggroguardia = false
  }

  if (aggroguardia)

    puntini2.visible = true;

  if (!aggroguardia) {
    puntini2.visible = false;
    dbguardia.visible = false;
    dbguardia2.visible = false;

  }

  if (aggroguardia && (cliccone)) {

    wakemeupwhenseptemberends = true;

    if (player.x - guardia.x > 5) {
      dbguardia.visible = true;
      puntini2.visible = false;
    }

    if (player.x - guardia.x < -5) {
      dbguardia.visible = true;
      puntini2.visible = false;
    }

    if (player.y - guardia.y > 5) {
      dbguardia.visible = true;
      puntini2.visible = false;
    }

    if (player.y - guardia.y < -5) {
      dbguardia.visible = true;
      puntini2.visible = false;
    }

    if (vistoguardia)
      game.time.events.add(5500, function() {
        chiudiguardia()
      })

    if (aggroguardia && (varbasta)) {

      wakemeupwhenseptemberends = true;

      if (player.x - guardia.x > 5) {
        dbguardia2.visible = true;
      }

      if (player.x - guardia.x < -5) {
        dbguardia2.visible = true;
      }

      if (player.y - guardia.y > 5) {
        dbguardia2.visible = true;
      }

      if (player.y - guardia.y < -5) {
        dbguardia2.visible = true;
      }

    }

  }

  dprofetax = player.x - profeta.x
  dprofetay = player.y - profeta.y

  if (dprofetax * dprofetax + dprofetay * dprofetay < 50000) {
    aggroprofeta = true
  }
  if (dprofetax * dprofetax + dprofetay * dprofetay > 50000) {
    aggroprofeta = false
  }

  if (aggroprofeta)

    puntini4.visible = true;

  if (aggroprofeta && (trex)) {
    if (player.x - profeta.x > 5) {
      dbprofeta1.visible = true;
    }

    if (player.x - profeta.x < -5) {
      dbprofeta1.visible = true;
    }

    if (player.y - profeta.y > 5) {
      dbprofeta1.visible = true;

    }

    if (player.y - profeta.y < -5) {
      dbprofeta1.visible = true;

    }
  }

  if (!aggroprofeta) {

    puntini4.visible = false;

  }

  dvendor2x = player.x - vendor2.x
  dvendor2y = player.y - vendor2.y

  if (dvendor2x * dvendor2x + dvendor2y * dvendor2y < 50000) {
    aggrovendor2 = true
  }
  if (dvendor2x * dvendor2x + dvendor2y * dvendor2y > 50000) {
    aggrovendor2 = false
  }

  if (aggrovendor2 && (wakemeupwhenseptemberends))

    puntini6.visible = true;

  if (aggrovendor2 && (pepe)) {
    if (player.x - vendor2.x > 5) {
      dbvendor2.visible = true;

    }

    if (player.x - vendor2.x < -5) {
      dbvendor2.visible = true;

    }

    if (player.y - vendor2.y > 5) {
      dbvendor2.visible = true;

    }

    if (player.y - vendor2.y < -5) {
      dbvendor2.visible = true;

    }
  } else {
    trex = false;
    dbvendor2.visible = false;

  }

  if (!aggrovendor2) {

    puntini6.visible = false;

  }

  dveciox = player.x - vecio.x
  dvecioy = player.y - vecio.y

  if (dveciox * dveciox + dvecioy * dvecioy < 50000) {
    aggrovecio = true
  }
  if (dveciox * dveciox + dvecioy * dvecioy > 50000) {
    aggrovecio = false
  }

  if (aggrovecio)

    puntini3.visible = true;

  if (aggrovecio && (booleanavecio))

    puntini5.visible = true;

  if (!aggrovecio) {
    puntini3.visible = false;
    puntini5.visible = false;
    dbvecio.visible = false;
    dbvecio2.visible = false;

  }

  if (aggrovecio && (claustrofobico)) {
    if (player.x - vecio.x > 5) {
      dbvecio.visible = true;
      puntini3.visible = false;


    }

    if (player.x - vecio.x < -5) {
      dbvecio.visible = true;
      puntini3.visible = false;


    }

    if (player.y - vecio.y > 5) {
      dbvecio.visible = true;
      puntini3.visible = false;

    }

    if (player.y - vecio.y < -5) {
      dbvecio.visible = true;
      puntini3.visible = false;

    }



    if (aggrovecio && (dialogovecchio2)) {
      if (player.x - vecio.x > 5) {
        dbvecio2.visible = true;
        puntini5.visible = false;

      }

      if (player.x - vecio.x < -5) {
        dbvecio2.visible = true;
        puntini5.visible = false;

      }

      if (player.y - vecio.y > 5) {
        dbvecio2.visible = true;
        puntini5.visible = false;

      }

      if (player.y - vecio.y < -5) {
        dbvecio2.visible = true;
        puntini5.visible = false;

      }

    }

  }

  //PARALLASSE
  {

    nuvole2.x = game.camera.x * 0.8
    nuvole2a.x = game.camera.x * 0.8

    montagne2.x = (game.camera.x * 0.9) - 200
    //montagne2a.x = game.camera.x*0.9

    nuvole1.x = game.camera.x * 0.7
    nuvole1a.x = game.camera.x * 0.7

    montagne1.x = (game.camera.x * 0.8) - 200
    //montagne1a.x = game.camera.x*0.8

    s6.x = (game.camera.x * 0.5) - 100

    //montagnesal.x = game.camera.x*0.8


    //s6a.x = game.camera.x*0.5
    //s6b.x = game.camera.x*0.5
  }
  game.camera.focusOnXY(player.x, player.y + 100)

  //MOVIMENTO PLAYER

  player.body.velocity.x = 0;


  if (vadasolo) {

    player.body.velocity.x = 700;
    game.camera.follow(tipregofunziona);


  }


  if (F.isDown && (lautaro)) {

    chiudidialogostatuatio()

  }

if (conteout)

eriksen()

  if (corrisoletto) {

    player.body.velocity.x = 400;
    nonritorno.visible = true;
    player.animations.play('dx', 15);


  }
  marble.update();

  if (romelulukaku && (!player.body.onFloor() && (!player.body.touching.down)))

      lamasalta = true;

        else {
      lamasalta = false;
    }

  if (romelulukaku) {

    if (lamasalta)
      player.animations.play('jlama', 12, true);

    else {

      player.animations.play('lama', 17, true);

    }
    }


  if (A.isDown && (!bloccocomandi && (!romelulukaku && (!sbiso)))) {
    player.body.velocity.x = -300;
    direzione = 0;
    barbisosx = true;

    if (!saltandosx && !saltandoidlesx)
    player.animations.play('sx', 15);
  }

  else
    barbisosx = false;


  if (D.isDown && (!bloccocomandi && (!morningjogging && (!romelulukaku && (!sbiso))))) {
    player.body.velocity.x = 300;
    direzione = 1;
    barbisodx = true;

    if (!saltandodx)

    player.animations.play('dx', 15);
  }

  else
    barbisodx = false;

  if (!A.isDown && (!D.isDown && (!romelulukaku && direzione == 1)) && (player.body.onFloor() || player.body.touching.down) && (!sbiso)) {
    player.animations.play('idledx', 7);
  }

  if (!A.isDown && (!D.isDown && (!romelulukaku && direzione == 0  && (!sbiso)))) {
    player.animations.play('idlesx', 7);
  }

  //SALTO PLAYER
  if ((jumpButton1.isDown || jumpButton2.isDown) && (player.body.onFloor() || player.body.touching.down && (!bloccocomandi && (!romelulukaku  && (!sbiso))))) {
    player.body.velocity.y = -500;

  }

  if ((jumpButton1.isDown || jumpButton2.isDown) && (player.body.onFloor() || player.body.touching.down && (morningjogging && (romelulukaku && (!sbiso))))) {
    player.body.velocity.y = -600;

  }

    if (direzione == 1 && (!player.body.onFloor() && (!player.body.touching.down && (!sbiso)))) {

      player.animations.play('saltodx', 10, true);

    }

    if (direzione == 1 && (barbisodx && (!player.body.onFloor() && (!player.body.touching.down && (!sbiso))))) {

      player.animations.play('saltodx', 10, true);

      saltandodx = true;

    }

else {
  saltandodx = false;
}

if (direzione == 0 && (!player.body.onFloor() && (!player.body.touching.down && (!sbiso)))) {

  player.animations.play('saltosx', 10, true);

  saltandoidlesx = true;

}

else {
saltandoidlesx = false;
}

if (direzione == 0 && (barbisosx && (!player.body.onFloor() && (!player.body.touching.down && (!sbiso))))) {

  player.animations.play('saltosx', 10, true);

  saltandosx = true;

}
else {
saltandosx = false;
}

  if (F.isDown && (!romelulukaku && (!bloccocomandi && (!sbiso)))) {
    bloccocomandi = true
  } else {
    bloccocomandi = false
  }

  if (F.isDown && (tappati)) {

    tio.visible = true;
    statuatio.visible = false;
    game.camera.shake(0.020, 600);
    game.time.events.add(4000, function() {
      dialogotio()
    });
    sfondofinto.alpha = 1;
    sfondofinto.filters = [marble];
    parlaparla = true;

  }

  //FILTRI
  if (F.isDown && (!romelulukaku)) {
    basicbooleana = true;

    if (basicbooleana) {

      invisibiroccia2.alpha = 1;
      roccia5.alpha = 1;
      invisibiroccia3.alpha = 1;
      invisibiroccia4.alpha = 1;
      invisibiroccia5.alpha = 1;

      tg5.alpha = 1
      tg4.alpha = 1
      tg3.alpha = 1
      tg2.alpha = 1
      tg1.alpha = 1
      v12.filters = [gray];
      v1.filters = [gray];
      carrettoc.filters = [gray];
      v2.filters = [gray];
      v3.filters = [gray];
      v4.filters = [gray];
      v6.filters = [gray];
      v7.filters = [gray];
      v8.filters = [gray];
      v10.filters = [gray];
      v11.filters = [gray];
      v13.filters = [gray];
      v14.filters = [gray];
      v16.filters = [gray];
      v17.filters = [gray];
      v18.filters = [gray];
      v20.filters = [gray];
      v21.filters = [gray];
      v22.filters = [gray];
      v23.filters = [gray];
      v25.filters = [gray];
      v27.filters = [gray];
      v29.filters = [gray];
      v30.filters = [gray];
      v31.filters = [gray];
      v5.tint = 0xff2660;
      v15.tint = 0xff2660;
      v19.tint = 0xff2660;
      v24.tint = 0xff2660;
      v26.tint = 0xff2660;
      v28.tint = 0xff2660;
      v9.tint = 0xff2660;
      cielopartesopra.filters = [gray];
      cielovill.filters = [gray];
      cielovill2.filters = [gray];
      nuvole2.filters = [gray];
      nuvole2a.filters = [gray];
      montagne2.filters = [gray];
      montagne1.filters = [gray];
      sfondopassaggio.filters = [gray];
      cielovillsal.filters = [gray];
      sfondosalinegrotta.filters = [gray];
      retromura1.filters = [gray];
      nuvole1.filters = [gray];
      nuvole1a.filters = [gray];
      terreno.filters = [gray];
      terreno1.filters = [gray];
      s6.filters = [gray];
      cactus.filters = [gray];
      cactus2.filters = [gray];
      pavmorte.filters = [gray];
      pocoprima1.filters = [gray];
      pav1.filters = [gray];
      terrenoprimopiano.filters = [gray];
      calpestabile.filters = [gray];
      calpestabile2.filters = [gray];
      calpestabile3.filters = [gray];
      muro8.filters = [gray];
      calpestabile4.filters = [gray];
      calpestabile5.filters = [gray];
      calpestabile6.filters = [gray];
      calpestabile7.filters = [gray];
      retromura2.filters = [gray];
      muro1.filters = [gray];
      muro2.filters = [gray];
      pocoprima2.filters = [gray];
      pocoprima3.filters = [gray];
      pocoprima4.filters = [gray];
      pocoprima5.filters = [gray];
      pocoprima6.filters = [gray];
      pocoprima7.filters = [gray];
      pocoprima8.filters = [gray];
      pocoprima9.filters = [gray];
      muro7.filters = [gray];
      mercato1.filters = [gray];
      mercato2.filters = [gray];
      mercato3.filters = [gray];
      mercato4.filters = [gray];
      mercato5.filters = [gray];
      mercato6.filters = [gray];
      casainizio.filters = [gray];
      fondo.filters = [gray];
      casainiziodavanti.filters = [gray];
      portagol.filters = [gray];
      sparalosbirro.filters = [gray];
      aprichacha.filters = [gray];
      attackbutton.filters = [gray];
      ingressogrottapar.filters = [gray];
      montagnesal.filters = [gray];
      sabbiasal.filters = [gray];
      roccesal.filters = [gray];
      sfondogrotta.filters = [gray];
      sopragrotta.filters = [gray];
      soprascuro.filters = [gray];
      sopragrotta2.filters = [gray];
      pavgrotta.filters = [gray];
      ingressogrottadietro.filters = [gray];
      pavgrottasal.filters = [gray];
      sottodietr.filters = [gray];
      stalattite1.filters = [gray];
      roccia2.filters = [gray];
      roccia3.filters = [gray];
      stalattite4.filters = [gray];
      roccia4.filters = [gray];
      stalattite5.filters = [gray];
      roccia6.filters = [gray];
      stalattite7.filters = [gray];
      roccia7.filters = [gray];
      roccia8.filters = [gray];
      stalattite9.filters = [gray];
      roccia9.filters = [gray];
      roccia10.filters = [gray];
      stalattite10.filters = [gray];
      roccia11.filters = [gray];
      roccialunga.filters = [gray];
      stalattite11.filters = [gray];
      stalattite12.filters = [gray];
      invisibiroccia1.filters = [gray];
      lava.filters = [gray];
      slava.filters = [gray];
      slava1.filters = [gray];
      slava2.filters = [gray];
      slava3.filters = [gray];
      slava4.filters = [gray];
      slava5.filters = [gray];
      slava6.filters = [gray];
      slava7.filters = [gray];
      slava8.filters = [gray];
      slava9.filters = [gray];
      slava10a.filters = [gray];
      slava11a.filters = [gray];
      slava12a.filters = [gray];
      slava13.filters = [gray];
      slava14.filters = [gray];
      slava15.filters = [gray];
      slava16.filters = [gray];
      slava17.filters = [gray];
      slava18.filters = [gray];
      slava19.filters = [gray];
      slava20.filters = [gray];
      slava21.filters = [gray];
      slava22.filters = [gray];
      slava23.filters = [gray];
      slava24.filters = [gray];
      slava25.filters = [gray];
      slava26.filters = [gray];
      slava27.filters = [gray];
      slava28.filters = [gray];
      slava29.filters = [gray];
      roccia1.filters = [gray];
      rocciafinale.filters = [gray];
      portafinaledietro.filters = [gray];
      portafinaledavanti.filters = [gray];
      ingressogrottadavanti.filters = [gray];
      muro3.filters = [gray];
      muro4.filters = [gray];
      muro5.filters = [gray];
      muro6.filters = [gray];
      sassosal.filters = [gray];

      booleanaboy = true;

      if (booleanaboy && (direzione == 1)) {

        player.animations.play('fermodx', 4, false);
      }

      if (booleanaboy && (direzione == 0)) {

        player.animations.play('fermosx', 4, false);
      }

      if (!flashed) {

        flash();
        flashed = true;

      }
    }

  } else {

    basicbooleana = false

  }

  if (!basicbooleana) {

    invisibiroccia2.alpha = 0;
    invisibiroccia3.alpha = 0;
    invisibiroccia4.alpha = 0;
    invisibiroccia5.alpha = 0;
    roccia5.alpha = 0;

    //player.filters = undefined;
    v12.filters = undefined;
    carretto.filters = undefined;
    v1.filters = undefined;
    v2.filters = undefined;
    v3.filters = undefined;
    v4.filters = undefined;
    v6.filters = undefined;
    v7.filters = undefined;
    v8.filters = undefined;
    v10.filters = undefined;
    v11.filters = undefined;
    v12.filters = undefined;
    v13.filters = undefined;
    v14.filters = undefined;
    //v15.filters = undefined;
    v16.filters = undefined;
    v17.filters = undefined;
    v18.filters = undefined;
    //v19.filters = undefined;
    v20.filters = undefined;
    v21.filters = undefined;
    v22.filters = undefined;
    v23.filters = undefined;
    v25.filters = undefined;
    v27.filters = undefined;
    v29.filters = undefined;
    v30.filters = undefined;
    v31.filters = undefined;

    v5.tint = 0xffffff;
    v9.tint = 0xffffff;
    v15.tint = 0xffffff;
    v19.tint = 0xffffff;
    v24.tint = 0xffffff;
    v26.tint = 0xffffff;
    v28.tint = 0xffffff;
    //c1.tint = 0xffffff;
    t1.tint = 0xffffff;
    flashed = false;

    tg1.alpha = 0;
    tg2.alpha = 0;
    tg3.alpha = 0;
    tg4.alpha = 0;
    tg5.alpha = 0;

    cielopartesopra.filters = undefined;
    cielovill.filters = undefined;
    cielovill2.filters = undefined;
    nuvole2.filters = undefined;
    nuvole2a.filters = undefined;
    montagne2.filters = undefined;
    montagne1.filters = undefined;
    sfondopassaggio.filters = undefined;
    cielovillsal.filters = undefined
    sfondosalinegrotta.filters = undefined;
    retromura1.filters = undefined;
    nuvole1.filters = undefined;
    nuvole1a.filters = undefined;
    terreno.filters = undefined;
    terreno1.filters = undefined;
    s6.filters = undefined;
    cactus.filters = undefined;
    cactus2.filters = undefined;
    pavmorte.filters = undefined;
    pocoprima1.filters = undefined;
    pav1.filters = undefined;
    terrenoprimopiano.filters = undefined;
    calpestabile.filters = undefined;
    calpestabile2.filters = undefined;
    calpestabile3.filters = undefined;
    muro8.filters = undefined;
    calpestabile4.filters = undefined;
    calpestabile5.filters = undefined;
    calpestabile6.filters = undefined;
    calpestabile7.filters = undefined;
    retromura2.filters = undefined;
    muro1.filters = undefined;
    muro2.filters = undefined;
    pocoprima2.filters = undefined;
    pocoprima3.filters = undefined;
    pocoprima4.filters = undefined;
    pocoprima5.filters = undefined;
    pocoprima6.filters = undefined;
    pocoprima7.filters = undefined;
    pocoprima8.filters = undefined;
    pocoprima9.filters = undefined;
    muro7.filters = undefined;
    mercato1.filters = undefined;
    mercato2.filters = undefined;
    mercato3.filters = undefined;
    mercato4.filters = undefined;
    mercato5.filters = undefined;
    mercato6.filters = undefined;
    casainizio.filters = undefined;
    fondo.filters = undefined;
    casainiziodavanti.filters = undefined;
    portagol.filters = undefined;
    sparalosbirro.filters = undefined;
    aprichacha.filters = undefined;
    attackbutton.filters = undefined;
    ingressogrottapar.filters = undefined;
    montagnesal.filters = undefined;
    sabbiasal.filters = undefined;
    roccesal.filters = undefined;
    sfondogrotta.filters = undefined;
    sopragrotta.filters = undefined;
    soprascuro.filters = undefined;
    sopragrotta2.filters = undefined;
    pavgrotta.filters = undefined;
    ingressogrottadietro.filters = undefined;
    pavgrottasal.filters = undefined;
    sottodietr.filters = undefined;
    stalattite1.filters = undefined;
    roccia2.filters = undefined;
    roccia3.filters = undefined;
    stalattite4.filters = undefined;
    roccia4.filters = undefined;
    stalattite5.filters = undefined;
    roccia6.filters = undefined;
    stalattite7.filters = undefined;
    roccia7.filters = undefined;
    roccia8.filters = undefined;
    stalattite9.filters = undefined;
    roccia9.filters = undefined;
    roccia10.filters = undefined;
    stalattite10.filters = undefined;
    roccia11.filters = undefined;
    roccialunga.filters = undefined;
    stalattite11.filters = undefined;
    stalattite12.filters = undefined;
    invisibiroccia1.filters = undefined;
    lava.filters = undefined;
    slava.filters = undefined;
    slava1.filters = undefined;
    slava2.filters = undefined;
    slava3.filters = undefined;
    slava4.filters = undefined;
    slava5.filters = undefined;
    slava6.filters = undefined;
    slava7.filters = undefined;
    slava8.filters = undefined;
    slava9.filters = undefined;
    slava10a.filters = undefined;
    slava11a.filters = undefined;
    slava12a.filters = undefined;
    slava13.filters = undefined;
    slava14.filters = undefined;
    slava15.filters = undefined;
    slava16.filters = undefined;
    slava17.filters = undefined;
    slava18.filters = undefined;
    slava19.filters = undefined;
    slava20.filters = undefined;
    slava21.filters = undefined;
    slava22.filters = undefined;
    slava23.filters = undefined;
    slava24.filters = undefined;
    slava25.filters = undefined;
    slava26.filters = undefined;
    slava27.filters = undefined;
    slava28.filters = undefined;
    slava29.filters = undefined;
    roccia1.filters = undefined;
    rocciafinale.filters = undefined;
    portafinaledietro.filters = undefined;
    portafinaledavanti.filters = undefined;
    ingressogrottadavanti.filters = undefined;
    muro3.filters = undefined;
    muro4.filters = undefined;
    muro5.filters = undefined;
    muro6.filters = undefined;
    sassosal.filters = undefined;



  }

  if (!stoppleasex2) {

    invisibiroccia2.alpha = 1;

  } else {

  }

  if (!stoppleasex3) {

    invisibiroccia3.alpha = 1;

  } else {

  }


  if (!stoppleasex4) {

    invisibiroccia4.alpha = 1;


  } else {

  }

  if (!stoppleasex5) {

    invisibiroccia5.alpha = 1;

  } else {

  }


  if (!stoppleasex05) {

    roccia5.alpha = 1;

  } else {

  }

  //DB1
  {
    d0x = player.x - t0.x
    d0y = player.y - t0.y

    if (d0x * d0x + d0y * d0y < 40000) {
      aggro0 = true
    }
    if (d0x * d0x + d0y * d0y > 40000) {
      aggro0 = false
    }
    if (aggro0) {
      if (player.x - t0.x > 5)
        db0.visible = true;
      if (player.x - t0.x < -5)
        db0.visible = true;
      if (player.y - t0.y > 5)
        db0.visible = true;
      if (player.y - t0.y < -5)
        db0.visible = true;
    } else {
      db0.visible = false;
    }
  }

  //DB1
  {
    d1x = player.x - t1.x
    d1y = player.y - t1.y

    if (d1x * d1x + d1y * d1y < 50000) {
      aggro1 = true
      visto1 = true
    }
    if (d1x * d1x + d1y * d1y > 50000) {
      aggro1 = false
    }
    if (aggro1) {
      if (player.x - t1.x > 5)
        db1.visible = true;
      if (player.x - t1.x < -5)
        db1.visible = true;
      if (player.y - t1.y > 5)
        db1.visible = true;
      if (player.y - t1.y < -5)
        db1.visible = true;
    } else {
      db1.visible = false;
    }
  }

  if (visto1)
    game.time.events.add(10500, function() {
      chiudibox1(db1)
    })

    //DBgrt
    {
      dgrtx = player.x - tgrotta.x
      dgrty = player.y - tgrotta.y

      if (dgrtx * dgrtx + dgrty * dgrty < 50000) {
        aggrogrt = true
        vistogrt = true
      }
      if (dgrtx * dgrtx + dgrty * dgrty > 50000) {
        aggrogrt = false
      }
      if (aggrogrt) {
        if (player.x - tgrotta.x > 5)
          dbtgrotta.visible = true;
        if (player.x - tgrotta.x < -5)
          dbtgrotta.visible = true;
        if (player.y - tgrotta.y > 5)
          dbtgrotta.visible = true;
        if (player.y - tgrotta.y < -5)
          dbtgrotta.visible = true;
      } else {
        dbtgrotta.visible = false;
      }
    }

    if (vistogrt)
      game.time.events.add(5500, function() {
        chiudiboxgrt(dbtgrotta)
      })


  //DB2
  {
    d2x = player.x - t4.x
    d2y = player.y - t4.y

    if (d2x * d2x + d2y * d2y < 50000) {
      aggro2 = true
      visto2 = true
    }
    if (d2x * d2x + d2y * d2y > 50000) {
      aggro2 = false
    }
    if (aggro2) {
      if (player.x - t4.x > 5)
        db2.visible = true;
      if (player.x - t4.x < -5)
        db2.visible = true;
      if (player.y - t4.y > 5)
        db2.visible = true;
      if (player.y - t4.y < -5)
        db2.visible = true;
    } else {
      db2.visible = false;
    }
  }

  if (visto2)
    game.time.events.add(5500, function() {
      chiudibox2(db2)
    })


  //db3
  {
    d3x = player.x - t5.x
    d3y = player.y - t5.y

    if (d3x * d3x + d3y * d3y < 50000) {
      aggro3 = true
      visto3 = true
    }
    if (d3x * d3x + d3y * d3y > 50000) {
      aggro3 = false
    }
    if (aggro3) {
      if (player.x - t5.x > 5)
        db3.visible = true;
      if (player.x - t5.x < -5)
        db3.visible = true;
      if (player.y - t5.y > 5)
        db3.visible = true;
      if (player.y - t5.y < -5)
        db3.visible = true;
    } else {
      db3.visible = false;
    }
  }

  if (visto3)
    game.time.events.add(5500, function() {
      chiudibox3(db3)
    })

  //db4
  {
    d4x = player.x - t7.x
    d4y = player.y - t7.y

    if (d4x * d4x + d4y * d4y < 50000) {
      aggro4 = true
      visto4 = true
    }
    if (d4x * d4x + d4y * d4y > 50000) {
      aggro4 = false
    }
    if (aggro4) {
      if (player.x - t7.x > 5)
        db4.visible = true;
      if (player.x - t7.x < -5)
        db4.visible = true;
      if (player.y - t7.y > 5)
        db4.visible = true;
      if (player.y - t7.y < -5)
        db4.visible = true;
    } else {
      db4.visible = false;
    }
  }

  if (visto4)
    game.time.events.add(5500, function() {
      chiudibox4(db4)
    })

  //db5
  {
    d5x = player.x - t8.x
    d5y = player.y - t8.y

    if (d5x * d5x + d5y * d5y < 50000) {
      aggro5 = true
      visto5 = true
    }
    if (d5x * d5x + d5y * d5y > 50000) {
      aggro5 = false
    }
    if (aggro5) {
      if (player.x - t8.x > 5)
        db5.visible = true;
      if (player.x - t8.x < -5)
        db5.visible = true;
      if (player.y - t8.y > 5)
        db5.visible = true;
      if (player.y - t8.y < -5)
        db5.visible = true;
    } else {
      db5.visible = false;
    }
  }

  if (visto5)
    game.time.events.add(5500, function() {
      chiudibox5(db5)
    })

  if (abilitaattacco && (varachacha)) {

    //weapon.fireAngle = 90;
    //weapon.fire();
    //fireTime = 0;
    iconachacha.destroy();
  }

  if (ESC.isDown) {

    menuaperto = true

    if (menuaperto) {
      menu.visible = true;
      continua.visible = true;
      tornaalteatro.visible = true;
      bloccocomandi = true;

    }

    if (!menuaperto) {
      menu.visible = false;
      continua.visible = false;
      bloccocomandi = false;
      tornaalteatro.visible = false;
    }
  }

  if (parlaparla)

    bloccocomandi = true;

  if (varachacha) {

    iconachacha.visible = true;

  }

  dattaccox = player.x - attackbutton.x;
  dattaccoy = player.y - attackbutton.y;

  if (dattaccox * dattaccox + dattaccoy * dattaccoy < 50000) {
    aggroattacco = true;
  }
  if (dattaccox * dattaccox + dattaccoy * dattaccoy > 50000) {
    aggroattacco = false;
  }

  if (aggroattacco && (varachacha))

    attackbutton.visible = true;

  if (!aggroattacco) {

    attackbutton.visible = false;

  }

  if (si.input.pointerOver()) {
    si.tint = 0xff2660
  } else {
    si.tint = 0xFFFFFF;
  }

  if (offri.input.pointerOver()) {
    offri.tint = 0xff2660
  } else {
    offri.tint = 0xFFFFFF;
  }

  if (no.input.pointerOver()) {
    no.tint = 0xff2660
  } else {
    no.tint = 0xFFFFFF;
  }

  if (continua.input.pointerOver()) {
    continua.tint = 0xff2660
  } else {
    continua.tint = 0xFFFFFF;
  }

  if (tornaalteatro.input.pointerOver()) {
    tornaalteatro.tint = 0xff2660
  } else {
    tornaalteatro.tint = 0xFFFFFF;
  }
}

function abilitadialogobox() {

  abilitadialogo = true;


}

function ollareollare() {

  game.camera.shake(0.010, 300)

}

function stopplease2() {

  invisibiroccia2.alpha = 1;
  stoppleasex2 = false;

}

function stopplease05() {

  roccia5.alpha = 1;
  stoppleasex05 = false;

}

function stopplease3() {
  invisibiroccia3.alpha = 1;
  stoppleasex3 = false;
}

function stopplease4() {
  invisibiroccia4.alpha = 1;
  stoppleasex4 = false;
}

function stopplease5() {
  invisibiroccia5.alpha = 1;
  stoppleasex5 = false;
}

function pullappiamo() {

  game.camera.shake(0.012, 300)

}


function attivacaduta1() {

  stalattite1.body.gravity.y = 500;
  game.camera.shake(0.010, 100);

}

function attivacaduta10() {

  stalattite10.body.gravity.y = 500;
  game.camera.shake(0.010, 100);
}

function attivacaduta4() {

  stalattite4.body.gravity.y = 600;
  game.camera.shake(0.010, 100);
}

function attivacaduta5() {

  stalattite5.body.gravity.y = 700;
  game.camera.shake(0.010, 100);
}

function attivacaduta7() {

  stalattite7.body.gravity.y = 800;
  game.camera.shake(0.010, 100);
}

function attivacaduta11() {

  stalattite11.body.gravity.y = 800;
  game.camera.shake(0.010, 100);
}

function attivacaduta12() {

  stalattite12.body.gravity.y = 700;
  game.camera.shake(0.010, 100);
}

function attivacaduta9() {

  stalattite9.body.gravity.y = 700;
  game.camera.shake(0.010, 100);
}

function tuttonormale() {

  playertornato.visible = false;
  fermoplayer()
}


function fermoplayer() {

  corrisoletto = false

}


function restorstal() {

  stalattite1.body.velocity.y = 0;
  stalattite1.body.gravity.y = 0;
  stalattite1.alignTo(rs1, Phaser.BOTTOM_LEFT);

  stalattite4.body.velocity.y = 0;
  stalattite4.body.gravity.y = 0;
  stalattite4.alignTo(rs4, Phaser.BOTTOM_LEFT);

  stalattite5.body.velocity.y = 0;
  stalattite5.body.gravity.y = 0;
  stalattite5.alignTo(rs5, Phaser.BOTTOM_LEFT);

  stalattite7.body.velocity.y = 0;
  stalattite7.body.gravity.y = 0;
  stalattite7.alignTo(rs7, Phaser.BOTTOM_LEFT);

  stalattite9.body.velocity.y = 0;
  stalattite9.body.gravity.y = 0;
  stalattite9.alignTo(rs9, Phaser.BOTTOM_LEFT);

  stalattite10.body.velocity.y = 0;
  stalattite10.body.gravity.y = 0;
  stalattite10.alignTo(rs10, Phaser.BOTTOM_LEFT);

  stalattite11.body.velocity.y = 0;
  stalattite11.body.gravity.y = 0;
  stalattite11.alignTo(rs11, Phaser.BOTTOM_LEFT);

  stalattite12.body.velocity.y = 0;
  stalattite12.body.gravity.y = 0;
  stalattite12.alignTo(rs12, Phaser.BOTTOM_LEFT);

}

function mori() {

  fade()
  restorstal()
  game.time.events.add(500, function() {
    respawngrotta(player)
  })


}

function abilitadialogobox() {

  abilitadialogo = true;
}

function chiudivecio1() {

  dbvecio.destroy();


}

function chiudivendor2() {

  dbvendor2.destroy();


}

function chiudivecio2() {

  dbvecio2.destroy();


}

function eriksen () {

  stelline.x = player.x + 10;
  stelline.y = player.y -10;

}

function seguibimbo() {

  tipregofunziona.x = player.x + 250;
  tipregofunziona.y = player.y + 100;

}

function funzioneavanti1() {

  dbprofeta1.destroy();

  if (counter == 0 || (counter == 1 || (counter == 2))) {

    dbprofetabravino.visible = true;
  }

  if (counter == 3 || (counter == 4 || (counter == 5))) {

    dbprofetabravo.visible = true;
  }

  if (counter >= 6) {

    dbprofetabravissimo.visible = true;
  }
}

function funzioneavanti2() {

  dbprofetabravino.destroy();
  dbprofetabravo.destroy();
  dbprofetabravissimo.destroy();
  dbprofeta3.visible = true;
  offri.visible = true;
}

function chiudiprofeta() {

  dbprofeta3.destroy();
  bloccocomandi = false;
  offri.destroy();
}

function offrix() {

  chiudiprofeta();
  nostatuette();
  bloccogrotta.kill();
}

function nostatuette() {

  counter = 0;

}

function chiudiguardia2() {

  dbguardia2.visible = false;

}

function dialogostatuatio() {

  game.time.events.add(3000, function() {
    vedidbstatuatio()
  })
  lautaro = true
  bloccocomandi = true;

}

function vedidbstatuatio() {

  dbstatuatio.visible = true;

}


function chiudidialogostatuatio() {

  dbstatuatio.destroy();
  tappati = true;

}

function dialogotio() {

  dbtio1.visible = true;
  game.time.events.add(5000, function() {
    avantio()
  })

}

function openexternallink ()
{
    var url = 'index.html';

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}

function avantio() {

  dbtio1.destroy();
  dbtio2.visible = true;
  notio.visible = true;



}

function chiuditio() {

  dbtio2.destroy();
  notio.destroy();
  fine = true;

}

function chiudidialogotio() {

  dbstatuatio.destroy();
  tappati = true;


}

function compra() {

  counter == 0;
  comprato = true;
  varachacha = true;
  fireTime = 1;
}

function chiudi() {

  dbvendor1.visible = false;
  si.visible = false;
  no.visible = false;
  abilitadialogo = false;
}

function chiudibox1() {

  db1.destroy()
}

function chiudiboxgrt() {

  dbtgrotta.destroy()
}

function chiudibox2() {

  db2.destroy()
}

function chiudibox3() {

  db3.destroy()
}

function chiudibox4() {

  db4.destroy()
}

function chiudibox5() {

  db5.destroy()
}

function chiudiguardia() {

  dbguardia.destroy()
  varbasta = true
}

function continuagioco() {
  menuaperto = false;
  menu.visible = false;
  continua.visible = false;
  tornaalteatro.visible = false;
  bloccocomandi = false;
}

function enableattack() {

  abilitaattacco = true;
  game.camera.follow(sparalosbirro)
  sparalosbirro.visible = true;
  sparalosbirro.body.immovable = false;
  sparalosbirro.body.gravity.y = 400;
}

function morte(player, pavmorte) {
  restore(v15)
  fade()
  game.time.events.add(500, function() {
    respawn(player)
  })
  game.camera.shake(0.005, 100)

}

function baciperugina() {

  brodi.x = player.x + 130;
  brodi.y = player.y + 50;

}
function pietrificazione() {

    sbiso = true;
    game.time.events.add(100, function() {
    pietrificazioneanim()
  })

}

function distruggi() {
sfondotio.visible = true;
  player.kill();
  falsato.alpha=1;
  game.time.events.add(1000, function() {
    distruggianim()
  })

}

function distruggianim() {

 falsato.animations.play ('rompi', 10, false);
 //rompere.onComplete.add(mortetio);
 game.time.events.add(1900, function() {
   mortetio()
 })

}

function pietrificazioneanim() {
  player.animations.play ('pietra', 8, false);
  game.time.events.add(2500, function() {
    creafinecattiva()
  })

}

function mortetio() {
  sfondotio.visible = false;
  tio.animations.play('scioglitiox', 8, false);
  //sciogli.onComplete.add(creafinebuona);
  game.time.events.add(1200, function() {
    creafinebuona()
  })


}

function mortegrottagang(player, mortegrotta) {
  fade()
  game.time.events.add(500, function() {
    respawngrotta(player)
  })
  restorstal()
  game.camera.shake(0.005, 100)
}

function respawngrotta(player) {
  player.x = 32700;
  player.y = 1350;
  stelline.visible = true;
  game.time.events.add(2000, function() {
    imbarazzante()
  })

}

function respawn(player) {
  player.x = spawn_x;
  player.y = spawn_y;
  stelline.visible = true;
  game.time.events.add(2000, function() {
    imbarazzante()
  })

}

function imbarazzante() {
  stelline.visible = false;

  }

function opendoor() {

  portagol.animations.play('portainiziale', 8, false)

}

function gangang() {

  game.camera.flash(0xff2660, 400);

}

function ganganga() {

  eddy = true;

}

function flashtigrotta() {

  game.camera.flash(0xff2660, 400);

}


function checkpointgrottax(player, tgrotta) {
  tgrotta.visible = false;
}


function checkpoint1(player, t1) {
  spawn_x = t1.x;
  spawn_y = t1.y;
}

function checkpoint0(player, t0) {
  spawn_x = t0.x;
  spawn_y = t0.y;
}

function checkpoint3(player, t3) {
  spawn_x = t3.x;
  spawn_y = t3.y;
}

function checkpoint4(player, t4) {
  spawn_x = t4.x;
  spawn_y = t4.y;
}

function checkpoint5(player, t5) {
  spawn_x = t5.x;
  spawn_y = t5.y;
}

function stelleloop() {

  loopino.play(10, true);

}

function cheilgiocoabbiainizio() {

  fintoplayer.visible = false;
  player.alpha = 1;
  game.camera.follow(player);

}

function checkpoint7(player, t7) {
  spawn_x = t7.x;
  spawn_y = t7.y;
}

function checkpoint8(player, t8) {
  spawn_x = t8.x;
  spawn_y = t8.y;
}

function speeed(player, iniziocorsa) {

  morningjogging = true;
  player.body.gravity.y = 900;
  eliminaspeed = true;
  player.x = 19950;
  player.y = 1100;
  vadasolo = true;
  iniziocorsa.kill();
  player.loadTexture('lama');
  romelulukaku = true

}


function sloow(player, finecorsa) {

  morningjogging = false;
  romelulukaku = false;
  vadasolo = false;
  player.body.gravity.y = 800;
}

function prenditotem(player, t1) {

  counter += 1;

  t1.kill();
  flashtigrotta();

}

function prenditotem(player, tgrotta) {

  counter += 1;

  t1.kill();

}

function prenditotem(player, t3) {

  counter += 1;
  t3.kill();
  flashtigrotta();

}

function prenditotem(player, t4) {

  counter += 1;

  t4.kill();
  flashtigrotta();

}

function prenditotem(player, t5) {

  counter += 1;
  t5.kill();
  flashtigrotta();

}

function prenditotem(player, ts1) {

  counter += 1;
  ts1.kill();

}

function prenditotem(player, ts2) {

  counter += 1;
  ts2.kill();

}

function prenditotem(player, ts3) {

  counter += 1;
  ts3.kill();

}

function prenditotem(player, ts4) {

  counter += 1;
  ts4.kill();

}

function prenditotem(player, ts5) {

  counter += 1;
  ts5.kill();

}

function prenditotem(player, ts6) {

  counter +=
  ts6.kill();

}

function prenditotem(player, tg1) {

  counter +=
  tg1.kill();

}

function prenditotem(player, tg2) {

  counter +=
  tg2.kill();

}

function prenditotem(player, tg3) {

  counter +=
  tg3.kill();

}

function prenditotem(player, tg4) {

  counter +=
  tg4.kill();

}

function prenditotem(player, tg5) {

  counter += 1;
  tg5.kill();

}

//function prenditotem(player,tg6) {

//counter += 1;
//totemLabel.setText("Devozione: " + counter);
//tg6.kill();

//}

//function prenditotem(player,t6) {

//counter += 1;
//totemLabel.setText("Devozione: " + counter);
//t6.kill();

//}

function chiuditutto() {

  dbvendor1.destroy();
  si.destroy();
  no.destroy();
  abilitadialogo = false;
  puntini1.destroy();
}

function prenditotem(player, t7) {

  counter += 1;
  t7.kill();
  flashtigrotta();

}

function prenditotem(player, t8) {

  counter += 1;
  t8.kill();
  flashtigrotta();

}

function cliccaclicca() {

  cliccone = true;

}

function claustrofobia() {

  claustrofobico = true;

}


function pepata() {

  pepe = true;
  puntini6.destroy();
}

function brontosauro() {

  trex = true;
  bloccocomandi = true;
  puntini4.destroy()
}

function coccodrillo() {

  dialogovecchio2 = true;
  puntini5.visible = false;
}

function scendilama() {

  player.loadTexture('player');
  player.animations.play('dx', 12, true);
  corrisoletto = true;

}

function restore(v9) {

  v9.body.velocity.y = 0;
  v9.body.velocity.x = 0;
  v9.alignTo(r9, Phaser.TOP_LEFT);
}

function restore(v19) {

  v19.body.velocity.y = 0;
  v19.body.velocity.x = 0;
  v19.alignTo(r19, Phaser.TOP_LEFT);
}

function restore(v24) {

  v24.body.velocity.y = 0;
  v24.body.velocity.x = 0;
  v24.alignTo(r24, Phaser.TOP_LEFT);
}

function restore(v26) {

  v26.body.velocity.y = 0;
  v26.body.velocity.x = 0;
  v26.alignTo(r26, Phaser.TOP_LEFT);
}

function restore(v28) {

  v28.body.velocity.y = 0;
  v28.body.velocity.x = 0;
  v28.alignTo(r28, Phaser.TOP_LEFT);
}

function restore(v19) {

  v19.body.velocity.y = 0
  v19.body.velocity.x = 0;;
  v19.alignTo(r19, Phaser.TOP_LEFT);
}

function restore(v5) {

  v5.body.velocity.y = 0;
  v5.body.velocity.x = 0;
  v5.alignTo(r5, Phaser.TOP_LEFT);
  v9.alignTo(r9, Phaser.TOP_LEFT);
}

function restore(v15) {

  v5.body.velocity.y = 0;
  v9.body.velocity.y = 0;
  v15.body.velocity.y = 0;
  v19.body.velocity.y = 0;
  v24.body.velocity.y = 0;
  v26.body.velocity.y = 0;
  v28.body.velocity.y = 0;
  v5.body.velocity.x = 0;
  v9.body.velocity.x = 0;
  v15.body.velocity.x = 0;
  v19.body.velocity.x = 0;
  v24.body.velocity.x = 0;
  v26.body.velocity.x = 0;
  v28.body.velocity.x = 0;
  v5.alignTo(r5, Phaser.TOP_LEFT);
  v9.alignTo(r9, Phaser.TOP_LEFT);
  v15.alignTo(r15, Phaser.TOP_LEFT);
  v19.alignTo(r19, Phaser.TOP_LEFT);
  v24.alignTo(r24, Phaser.TOP_LEFT);
  v26.alignTo(r26, Phaser.TOP_LEFT);
  v28.alignTo(r28, Phaser.TOP_LEFT);
}

function flash() {

  game.camera.flash(0xFFFFFF, 400);
}

function stordisci2() {

  avocado = false;
  evidenziatore = true;
  rettangoloinvisivile.visible = false;
  dbguardia.destroy();
  dbguardia2.destroy();
  puntini2.destroy();
  game.time.events.add(300, function() {
    unavoltasola()
  });
  game.time.events.add(1500, function() {
    vigna()
  })
  giasparato = true;
  sparalosbirro.alpha = 0;

}

function vigna() {

  //sparalosbirro.body.gravity.y = -400;
  game.time.events.add(1200, function() {
    tornalplayer()
  })


}

function tornalplayer() {

  if (giasparato)

    game.camera.follow(player);
  sparalosbirro.visible = false;

}

function unavoltasola() {

  evidenziatorecounter = 0

}

function fade() {

  game.camera.fade(0x000000, 500);

}

function resetFade() {

  game.camera.resetFX();

}

function creafinecattiva() {

  badend.visible = true;

}

function creafinebuona() {

  buonafine.visible = true;

}

function render() {



}
