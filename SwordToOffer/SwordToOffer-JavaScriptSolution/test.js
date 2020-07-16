let a = ['a','b']
let b = ['c','d']
let c = 'e'
b[Symbol.isConcatSpreadable]=false
d = a.concat(b,c)
console.log(d)


import { FormattedMessage,formatMessage } from 'umi-plugin-react/locale';

<FormattedMessage id="" defaultMessage=""/>


formatMessage({id:"",defaultMessage:""})

message:formatMessage({id:"",defaultMessage:""}),
title:formatMessage({id:"",defaultMessage:""}),

label={formatMessage({id: '',defaultMessage: '',})}