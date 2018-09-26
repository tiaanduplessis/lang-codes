import find from 'lang-codes'

find('afr') // { 'name': 'Afrikaans', 'local': 'Afrikaans', '1': 'af', '2': 'afr', '2T': 'afr', '2B': 'afr', '3': 'afr' }
find(/af/) // [ { '1': 'aa', '2': 'aar', '3': 'aar', name: 'Afar', local: 'Afaraf', '2T': 'aar', '2B': 'aar' }, { '1': 'af', '2': 'afr', '3': 'afr', name: 'Afrikaans', local: 'Afrikaans', '2T': 'afr', '2B': 'afr' } ]
find('zul', { props: 'name' }) // Zulu
