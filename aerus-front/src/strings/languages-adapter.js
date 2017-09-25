import Languages from './languages';
import path from 'path';
const languagesAvaiable = {};

module.exports = {

    checkExistingLanguages(){
        Languages.languagesAvaiable.forEach(element => {
                    console.log('Language: ',element);   
        });

        console.log(__dirname);
    }
}