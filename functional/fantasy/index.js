const { Maybe } = require('ramda-fantasy')
const { path } = require('ramda')

let joeUser = {
  name: 'joe',
  email: 'joe@example.com',
  prefs: {
    languages: {
      primary: 'sp',
      secondary: 'en'
    }
  }
};

let nullUser = null



const getLang = (lang) => `http://www.google.com${lang}`

const getLanguage = (user) => {
  const x = Maybe(user).map(path(['prefs', 'languages', 'primary']))
  // .chain(getLang)
  console.log('mayber', x)
  return x
}

const boot = (user, defaultUrl) => {
  return getLanguage(user).getOrElse('http://www.yahoo.com')
}

const x = boot(joeUser)

console.log('x', x)