var elForn, elSelectPsckage, elPackageHint, elTerms, elTermsHint;
elForn       = document.getElementById('formSignup');
elSelectPsckage = document.getElementsById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
    var pack = this.options[this.elSelectedIndex].value;
    if (pack === 'monthly') {
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    }else {
        elPackageHint.innerHTML = 'Wise choice';
    }
} 
function checkTermsI(event) {
    if (!elTerms.checked) {
        elTermsHint.innerHTML = 'You must agree to the tems.';
    }
}
elForm.addEventlistener('subit', checkTerms, false);
elSelectPsckage.addEventlistener('change', packageHint, false);