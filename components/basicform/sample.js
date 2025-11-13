const formData2 = [
    { type: 'text', name: 'name', valid: {required: true, pattern: /^[a-zA-Z ]*$/i } },
    { type: 'tel', name: 'mobile', valid: { required: true, minLength: 8, pattern: /^\d{10}$/ } },
    { type: 'email', name: 'email', label: 'E-Mail', valid: { required: true, pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i } },
    { type: 'textArea', name: 'message', valid: { required: true, max: 150 } },
    { type: 'checkbox', name: 'showSalary', label: 'Show on Profile', def: true },
    { type: 'submit', text: 'Send Message'/*, style: styles.schedBtn*/ },

    { type: 'password', name: 'password', valid: {required: true} },
    { type: 'btn', text: 'Send Message'/*, style: styles.schedBtn*/ },
    { type: 'color', name: 'color', def: '#ff0000' },
    { type: 'range', name: 'price' },
    { type: 'number', name: 'price', step: 10, valid: {required: true, min: 0, max: 100} },
    { type: 'date', name: 'dob', label: 'Date of Birth', min : '2023-06-27', valid: {required: true } },
    { type: 'dropdown', name: 'gender', valid: {required: true }, options: ['Male', 'Female', 'Others'] },
    { type: 'tags', name: 'likes', def: []},
    // { type: 'custom', component: <Editor label="About Company" value={aboutData} setValue={setAboutData}/> },
    // { type: 'custom', component: <Viewer value={aboutData} /> },
] ;

export { formData2 } ;