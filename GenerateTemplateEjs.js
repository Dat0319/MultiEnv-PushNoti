let fs = require('fs');
let ejs = require('ejs');
let param = require('param');
const { exec } = require('child_process');
let pathTemplate = '../templates',
  Dir = require('path'),
  event = {
    creators: [
      {
        anonymous: false,
        id: '61d7a62d79d10a0e713576a7',
        email: 'DATTD@VMODEV.COM',
        organization: 'THANG TEST',
        name: 'TRAN DUY DAT',
        language: '',
        hash: '454a7664414bd8c6bd8cf4e429f7f005',
      },
      {
        anonymous: false,
        name: 'DAT CONTENT TEST',
        email: 'DATTRAN0319@GMAIL.COM',
        organization: 'THANG TEST',
        language: '',
        id: '61d7c4d2d146e83abb3851fc',
        hash: 'c871b4ef6151696a492c7061e2016e2b',
      },
    ],
    presenters: [
      {
        anonymous: false,
        id: '61d7a62d79d10a0e713576a7',
        email: 'DATTD@VMODEV.COM',
        organization: 'THANG TEST',
        name: 'TRAN DUY DAT',
        language: '',
        hash: '454a7664414bd8c6bd8cf4e429f7f005',
      },
      {
        anonymous: false,
        name: 'DAT CONTENT TEST',
        email: 'DATTRAN0319@GMAIL.COM',
        organization: 'THANG TEST',
        language: '',
        id: '61d7c4d2d146e83abb3851fc',
        hash: 'c871b4ef6151696a492c7061e2016e2b',
      },
    ],
    moderators: [
      {
        anonymous: false,
        id: '61d7a62d79d10a0e713576a7',
        email: 'DATTD@VMODEV.COM',
        organization: 'THANG TEST',
        name: 'TRAN DUY DAT',
        language: '',
        hash: '454a7664414bd8c6bd8cf4e429f7f005',
      },
      {
        anonymous: false,
        name: 'DAT CONTENT TEST',
        email: 'DATTRAN0319@GMAIL.COM',
        organization: 'THANG TEST',
        language: '',
        id: '61d7c4d2d146e83abb3851fc',
        hash: 'c871b4ef6151696a492c7061e2016e2b',
      },
    ],
    recipients: [
      {
        id: '61d7a62d79d10a0e713576a7',
        email: 'DATTD@VMODEV.COM',
        name: 'TRAN DUY DAT',
        language: '',
        hash: '454a7664414bd8c6bd8cf4e429f7f005',
      },
      {
        id: '61d7c4d2d146e83abb3851fc',
        email: 'DATTRAN0319@GMAIL.COM',
        name: 'DAT CONTENT TEST',
        language: '',
        hash: 'c871b4ef6151696a492c7061e2016e2b',
      },
    ],
    literalId: 'LITERAL_ID_HERE_123456789',
    title: 'TITLE_OF_DUMMY_DATA_123456789',
  };
options = {
  data: {
    event,
    formatted: {
      date: '11-11-2222',
      time: '11:11:11 11:11 AM',
      iso: 'ISO STANDARD',
    },
    organization: {
      name: 'NAME OF ORGANIZATION',
    },
    userCreator: {
      anonymous: false,
      id: '61d7a62d79d10a0e713576a7',
      email: 'DATTRANDUY@VMODEV.COM',
      organization: 'THANG TEST',
      name: 'TRAN DUY DAT',
      language: '',
      hash: '454a7664414bd8c6bd8cf4e429f7f005',
    },
    urls: param('urls'),
    otp: 'DIGITAL_123456',
    async: true,
  },
  recipient: {
    anonymous: false,
    id: '61d7a62d79d10a0e713576a7',
    email: 'DATTD@VMODEV.COM',
    organization: 'THANG TEST',
    name: 'TRAN DUY DAT',
    language: '',
    hash: '454a7664414bd8c6bd8cf4e429f7f005',
  },
  literalId: 'LITERAL_ID_HERE_123456789',
  title: 'TITLE_OF_DUMMY_DATA_123456789',
  formatted: {
    date: '11-11-2222',
    time: '11:11:11 11:11 AM',
    iso: 'ISO STANDARD',
  },
  urls: param('urls'),
  otp: 'DIGITAL_123456',
  async: true,
};

options._ = (key) => {
  return key;
  // if (!options.localization[key]) {
  //   return '***' + key;
  // }
  // return options.localization[key];
};

function getPathTemplate(path) {
  let res = [];
  let pathChild = fs
    .readdirSync(path, { withFileTypes: true })
    .filter((item) => item.isDirectory());

  let pathFile = fs
    .readdirSync(path, { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);

  if (!!pathChild.length) {
    pathChild.map((child) => {
      let childPaths = getPathTemplate(`${path}/${child.name}`);
      res = res.concat(childPaths);
    });
  } else {
    for (let i = 0; i < pathFile.length; i++) {
      const ele = pathFile[i];
      if (ele !== 'subject.ejs') {
        res.push(`${path}/${ele}`);
      }
    }
    return res;
  }

  res = res.concat(pathFile);
  return res;
}

const transformContentToHTML = (path) => {
  fs.readFile(Dir.join(__dirname, path), async (err, templateText) => {
    let content = await ejs.render(templateText.toString(), options);
    await fs.writeFile(
      `${path.replace('../templates/', '').replace('/html.ejs', '')}.html`,
      '',
      function () {}
    );
    await fs.appendFile(
      `${path.replace('../templates/', '').replace('/html.ejs', '')}.html`,
      content.toString(),
      function (err) {
        if (err) throw err;
      }
    );
  });
};

function render() {
  let listPathTemplate = getPathTemplate(pathTemplate);
  listPathTemplate.map((path) => transformContentToHTML(path));
  listPathTemplate.map((path) => {
    let url = `http://127.0.0.1:5500/mail/checkTemplate/${path
        .replace('../templates/', '')
        .replace('/html.ejs', '')}.html`,
      command = `open -a "Google Chrome" ${url}`;

    // exec(command);
  });

  return true;
}

render();
