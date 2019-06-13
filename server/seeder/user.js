const { User } = require("../api/models");
const uniqueString = require("unique-string");
const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

let users = [
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "670678660",
    firstname: "Fedjio",
    lastname: "Raymond",
    email: "fedjioraymond@gmail.com"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "682708397",
    firstname: "Nema",
    lastname: "Dede",
    email: "nema6dede@gmail.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "467536982",
    firstname: "Casey",
    lastname: "Melinda",
    email: "vitae@laoreetlectus.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "859887530",
    firstname: "Emma",
    lastname: "Kelly",
    email: "consequat@nisl.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "415822416",
    firstname: "Candace",
    lastname: "Ursa",
    email: "ullamcorper.viverra.Maecenas@augueeu.net"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "855690979",
    firstname: "Brynne",
    lastname: "Hannah",
    email: "urna@nequevitaesemper.edu"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "512961078",
    firstname: "Cameron",
    lastname: "Jessica",
    email: "euismod@quisarcuvel.ca"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "735767341",
    firstname: "Aimee",
    lastname: "Buffy",
    email: "quis.pede.Suspendisse@doloregestas.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "814159678",
    firstname: "Chelsea",
    lastname: "Ebony",
    email: "in.hendrerit@risusDonec.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "340367305",
    firstname: "Keely",
    lastname: "Remedios",
    email: "eu.eleifend.nec@mi.org"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "115155225",
    firstname: "Alice",
    lastname: "Hedwig",
    email: "faucibus.lectus.a@mauris.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "491037947",
    firstname: "Iola",
    lastname: "Kristen",
    email: "Morbi.sit@feugiat.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "756212878",
    firstname: "Dai",
    lastname: "Zorita",
    email: "nec.urna.et@Duis.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "932498411",
    firstname: "Xerxes",
    lastname: "Aiko",
    email: "sit.amet@quisaccumsanconvallis.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "748013430",
    firstname: "Ora",
    lastname: "Victoria",
    email: "non.feugiat.nec@elementum.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "564984892",
    firstname: "Jillian",
    lastname: "Latifah",
    email: "In@amet.org"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "027255000",
    firstname: "Nevada",
    lastname: "Tatiana",
    email: "consectetuer.cursus.et@vehicularisusNulla.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "555325619",
    firstname: "Neve",
    lastname: "Leigh",
    email: "volutpat@egetipsumSuspendisse.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "946324355",
    firstname: "Nelle",
    lastname: "Lucy",
    email: "eget@sociisnatoque.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "522492373",
    firstname: "Xerxes",
    lastname: "Eden",
    email: "vestibulum.nec.euismod@natoque.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "597347016",
    firstname: "Neve",
    lastname: "Shafira",
    email: "posuere.vulputate.lacus@at.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "006885331",
    firstname: "Rylee",
    lastname: "Anika",
    email: "Donec.dignissim.magna@sit.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "649603469",
    firstname: "Anastasia",
    lastname: "Larissa",
    email: "massa.Integer@dolor.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "045796752",
    firstname: "Tana",
    lastname: "Vera",
    email: "gravida.nunc@mollisvitae.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "258500510",
    firstname: "Lillian",
    lastname: "Marah",
    email: "vitae.nibh@tinciduntorci.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "829972862",
    firstname: "Autumn",
    lastname: "Hilda",
    email: "semper.pretium.neque@Suspendisseseddolor.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "916684219",
    firstname: "Riley",
    lastname: "Genevieve",
    email: "vulputate.dui@Mauris.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "738067335",
    firstname: "Hermione",
    lastname: "Martina",
    email: "eleifend.vitae.erat@risusatfringilla.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "984709688",
    firstname: "Brenna",
    lastname: "Nadine",
    email: "eu@Duissitamet.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "181425227",
    firstname: "Quintessa",
    lastname: "Naida",
    email: "ut@ipsum.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "595547949",
    firstname: "Sheila",
    lastname: "Rylee",
    email: "dolor.Fusce@montesnasceturridiculus.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "183273343",
    firstname: "Kaye",
    lastname: "Shoshana",
    email: "hendrerit.consectetuer@Utsagittis.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "137737048",
    firstname: "Ruby",
    lastname: "Kaye",
    email: "metus.eu@semsemper.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "590209778",
    firstname: "Cameran",
    lastname: "Aphrodite",
    email: "fringilla@mauriseuelit.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "629404729",
    firstname: "Cathleen",
    lastname: "Lila",
    email: "ac.turpis@sit.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "187962738",
    firstname: "Elaine",
    lastname: "Anjolie",
    email: "Nunc.sollicitudin.commodo@Duismi.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "488877049",
    firstname: "Emma",
    lastname: "Jael",
    email: "risus@sit.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "005942625",
    firstname: "Quyn",
    lastname: "Emi",
    email: "ipsum@velitQuisque.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "658630047",
    firstname: "Zorita",
    lastname: "Patience",
    email: "consectetuer.cursus.et@atvelit.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "150062029",
    firstname: "Hermione",
    lastname: "Aimee",
    email: "Nulla@felis.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "704608808",
    firstname: "Dara",
    lastname: "Nichole",
    email: "ornare.placerat.orci@eu.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "276046740",
    firstname: "Kelsie",
    lastname: "Xena",
    email: "mauris.ut@atfringilla.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "099029487",
    firstname: "Shellie",
    lastname: "Sydney",
    email: "et.nunc@justoProin.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "601136878",
    firstname: "Keely",
    lastname: "Olga",
    email: "eget.ipsum.Suspendisse@ullamcorper.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "203847257",
    firstname: "Fatima",
    lastname: "Elaine",
    email: "purus@Aeneaneuismodmauris.com"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "418392125",
    firstname: "Melissa",
    lastname: "Erin",
    email: "gravida.non.sollicitudin@et.edu"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "519194883",
    firstname: "Naomi",
    lastname: "Cara",
    email: "et.pede@amet.ca"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "648443620",
    firstname: "Germane",
    lastname: "Alfreda",
    email: "magna.Ut@esttempor.net"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "828692236",
    firstname: "Abigail",
    lastname: "Athena",
    email: "sit@Integer.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "856570833",
    firstname: "Allegra",
    lastname: "Audrey",
    email: "Proin@veliteget.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "327966421",
    firstname: "Mari",
    lastname: "Moana",
    email: "Duis.volutpat@magnisdis.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "856209516",
    firstname: "Eleanor",
    lastname: "Xyla",
    email: "ligula@ametconsectetuer.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "326633829",
    firstname: "Gay",
    lastname: "Fleur",
    email: "Vestibulum@loremvitaeodio.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "644542328",
    firstname: "Kaitlin",
    lastname: "Dacey",
    email: "natoque@Vivamusnibh.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "450119139",
    firstname: "Kimberly",
    lastname: "Emi",
    email: "bibendum@Duisac.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "585717565",
    firstname: "Jayme",
    lastname: "Hillary",
    email: "tortor.at@interdumliberodui.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "038134200",
    firstname: "Tana",
    lastname: "Nicole",
    email: "Quisque.varius.Nam@eu.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "811505717",
    firstname: "Karina",
    lastname: "Teagan",
    email: "eleifend.Cras@est.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "515457707",
    firstname: "Alika",
    lastname: "Gwendolyn",
    email: "ante@nec.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "625285435",
    firstname: "Camille",
    lastname: "Lucy",
    email: "montes@quismassa.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "539112024",
    firstname: "Serina",
    lastname: "Destiny",
    email: "nisi.Cum.sociis@quamvelsapien.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "901540825",
    firstname: "Irene",
    lastname: "Signe",
    email: "eu.dolor@parturientmontesnascetur.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "855022209",
    firstname: "Jamalia",
    lastname: "Bertha",
    email: "erat.neque.non@loremloremluctus.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "632534216",
    firstname: "Leslie",
    lastname: "Amethyst",
    email: "non.bibendum.sed@gravida.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "328460687",
    firstname: "Claudia",
    lastname: "Sandra",
    email: "aliquam.iaculis.lacus@hendreritDonec.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "094805959",
    firstname: "Galena",
    lastname: "Yvonne",
    email: "rutrum.lorem@Donecdignissimmagna.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "950706561",
    firstname: "Sybil",
    lastname: "Michelle",
    email: "tempor.erat.neque@tellusjusto.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "632633990",
    firstname: "Melissa",
    lastname: "Priscilla",
    email: "litora@enimEtiam.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "678998510",
    firstname: "Carla",
    lastname: "Veronica",
    email: "at@cursus.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "294920054",
    firstname: "Kylie",
    lastname: "Hanae",
    email: "sagittis.lobortis.mauris@Duisdignissim.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "976048220",
    firstname: "Halla",
    lastname: "Kai",
    email: "torquent.per.conubia@faucibus.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "290557713",
    firstname: "Basia",
    lastname: "Lucy",
    email: "mollis.vitae@volutpatornarefacilisis.com"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "162809065",
    firstname: "Octavia",
    lastname: "Orli",
    email: "luctus.vulputate.nisi@nonhendreritid.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "355923858",
    firstname: "Sonya",
    lastname: "Wendy",
    email: "eget.varius@Lorem.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "042338285",
    firstname: "Isabella",
    lastname: "Dana",
    email: "pede.nec@elitpharetraut.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "240300686",
    firstname: "Ciara",
    lastname: "Mallory",
    email: "diam.eu@dui.org"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "561904537",
    firstname: "Nyssa",
    lastname: "Bell",
    email: "nisi.sem.semper@nostra.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "054546766",
    firstname: "Imani",
    lastname: "MacKenzie",
    email: "feugiat.placerat.velit@ut.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "153918546",
    firstname: "Orla",
    lastname: "Mollie",
    email: "ac@risusNuncac.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "349059204",
    firstname: "Farrah",
    lastname: "Naida",
    email: "augue@lectusNullam.ca"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "677285253",
    firstname: "Wanda",
    lastname: "Ariana",
    email: "vitae@liberoProinsed.net"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "205932417",
    firstname: "Ori",
    lastname: "Amena",
    email: "non.enim.commodo@Suspendissedui.org"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "831177124",
    firstname: "Allegra",
    lastname: "Tallulah",
    email: "tortor@odioauctorvitae.net"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "864217907",
    firstname: "Rose",
    lastname: "Debra",
    email: "dapibus@elitpede.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "610382739",
    firstname: "Donna",
    lastname: "Hilda",
    email: "ante.dictum@Nam.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "940695812",
    firstname: "Wynter",
    lastname: "Martena",
    email: "neque@aliquetProin.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "175034099",
    firstname: "Briar",
    lastname: "Scarlet",
    email: "tincidunt.neque@ornareegestasligula.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "881894900",
    firstname: "Nyssa",
    lastname: "Mollie",
    email: "in.lobortis.tellus@enimcommodo.com"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "793554521",
    firstname: "Kelsey",
    lastname: "Sybil",
    email: "lacus.Etiam.bibendum@quamdignissim.org"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "227960666",
    firstname: "Ulla",
    lastname: "Kathleen",
    email: "turpis@metus.edu"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "360437301",
    firstname: "Yuri",
    lastname: "Cameron",
    email: "Quisque@in.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "365465461",
    firstname: "Eliana",
    lastname: "Reagan",
    email: "lacus.pede.sagittis@pharetraQuisque.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "877288149",
    firstname: "Jaden",
    lastname: "Kirestin",
    email: "urna.Nunc@dui.ca"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "937696269",
    firstname: "Venus",
    lastname: "Josephine",
    email: "sed.tortor@interdumfeugiatSed.org"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "875805943",
    firstname: "Melissa",
    lastname: "Bree",
    email: "malesuada@turpis.edu"
  },
  {
    password: "00000000",
    isHouseProvider: false,
    slug: uniqueString(),
    phone: "772684662",
    firstname: "Skyler",
    lastname: "Naomi",
    email: "est.Nunc.laoreet@vitaesodales.com"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "595169166",
    firstname: "Catherine",
    lastname: "Inez",
    email: "Nullam.suscipit@ultricessit.ca"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "729108074",
    firstname: "Ariel",
    lastname: "Harriet",
    email: "at.risus.Nunc@idenimCurabitur.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "156147861",
    firstname: "Halee",
    lastname: "Odessa",
    email: "ac.nulla@sitametrisus.com"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "978353836",
    firstname: "Rhona",
    lastname: "Casey",
    email: "Mauris@aneque.ca"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "821854230",
    firstname: "Miriam",
    lastname: "Pascale",
    email: "Mauris.molestie.pharetra@ornaresagittis.co.uk"
  },
  {
    password: "00000000",
    isHouseProvider: true,
    slug: uniqueString(),
    phone: "444048921",
    firstname: "Hanae",
    lastname: "Rama",
    email: "dolor.Fusce.feugiat@risus.ca"
  }
];

async function hashPassword() {
  const SALT_FACTOR = 8;
  await users.forEach((user, index) => {
    let h = bcrypt
      .genSaltAsync(SALT_FACTOR)
      .then(salt => bcrypt.hashAsync(user.password, salt, null))
      .then(hash => {
        users[index].password = hash;
      });
  });
  // console.log(users);
  User.bulkCreate(users).then(data => {
    console.log(data);
  });
}
hashPassword();
