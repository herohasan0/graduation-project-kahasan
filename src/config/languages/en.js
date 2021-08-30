const FORMTITLE = 'Citizenship Application Form';
const FORMHELPERTEXT =
  'Today your life could be changed. Fill in this form correctly and if you give us answers to what we want to, we will accept your application.';
const SUBMITTEDALERTTITLE = 'Application submitted!';
const SUBMITTEDALERTDESCRIPTION =
  'Thanks for submitting your application. Our team will get back to you soon.';
const ALERTIDMESSAGE = 'Your ID: ';
const WARNINGMESSAGE =
  'Note that id number. You will use it when checking your application status later.';
const CHECKFORMTITLE = 'Check Your Status';
const CHECKFORMDESCRIPTION =
  "You can check your status with your form ID. If you lost your id, you already don't deserve to be a citizen of our planet.";
const NOAPPLICATONERROR = 'There is no application with this id. Try again!';
const PLANETSELECTHELPERTEXT =
  'If your country is not listed on this list, you can ask your country why.';
const REASONTOAPPLYHELPERTEXT =
  'You should be honest, otherwise, we will cancel your application.';
const PLANETSELECTTITLE = 'Planet of Birth';
const PLANETSELECTPLACEHOLDER = 'Select a planet';
const HOMEPAGETITLE =
  ' Vogsphere is the coolest planet in the galaxy. On this page, you can apply for citizenship to this beautiful planet or you can check your previous application.';
const HOMEPAGEDESCRIPTION =
  'If you are an authorized person and looking for an admin page, you can click link below. But if you are not authorized, do not even think about clicking the link.';
const FORMINPUTVALUES = [
  {
    id: '1',
    label: 'firstName',
    inputTitle: 'First Name',
  },
  {
    id: '2',
    label: 'lastName',
    inputTitle: 'Last Name',
  },
  {
    id: '3',
    label: 'yearOfBirth',
    inputTitle: 'Year of Birth',
  },
  {
    id: '4',
    label: 'idNumber',
    inputTitle: 'ID Number',
  },
];
const FORMTEXTAREAVALUES = [
  {
    id: '5',
    label: 'address',
    inputTitle: 'Address',
    helperText: '',
  },
  {
    id: '6',
    label: 'reasonOfApply',
    inputTitle: 'Reason of Apply',
    helperText: REASONTOAPPLYHELPERTEXT,
  },
];
const PLANETS = [
  {
    id: 'magrathea62152xzzas',
    name: 'Magrathea',
  },
  {
    id: 'earthxhow2vm51x',
    name: 'Earth',
  },
  {
    id: 'nowwhat2nf24b324x',
    name: 'NowWhat',
  },
  {
    id: 'bethselaminvhfna2anb02',
    name: 'Bethselamin',
  },
  {
    id: 'betelgeuse5xxx438bvne4',
    name: 'Betelgeuse 5',
  },
  {
    id: 'viltvodle6ggg321vxaax243',
    name: 'Viltvodle 6',
  },
];

export {
  FORMTITLE,
  FORMHELPERTEXT,
  SUBMITTEDALERTTITLE,
  SUBMITTEDALERTDESCRIPTION,
  ALERTIDMESSAGE,
  WARNINGMESSAGE,
  CHECKFORMTITLE,
  CHECKFORMDESCRIPTION,
  NOAPPLICATONERROR,
  PLANETSELECTHELPERTEXT,
  REASONTOAPPLYHELPERTEXT,
  FORMINPUTVALUES,
  FORMTEXTAREAVALUES,
  PLANETS,
  PLANETSELECTTITLE,
  PLANETSELECTPLACEHOLDER,
  HOMEPAGETITLE,
  HOMEPAGEDESCRIPTION,
};
