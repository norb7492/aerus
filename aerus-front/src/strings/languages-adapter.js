import Languages from './languages';
import path from 'path';

//importing languages
import PortugueseBR from './languages/pt-br';
import German from './languages/de';
import English from './languages/eng-en';
import Japanese from './languages/jp';

module.exports = {
    
    translate(word, language, component){
        if(word == null || language == null || component == null){
            return 'please enter all parameters'
        }else{
        switch(language){
            case 'pt-br':
                if(PortugueseBR[component][word]){
                    return PortugueseBR[component][word];
                }else{
                    return `word ${word} not found`;
                }
            break;
            case 'de':
                if(German[component][word]){
                    return German[component][word];
                }
            break;
            case 'eng-en':  
                if(Japanese[component][word]){
                    return English[component][word];
                }else{
                    return `word ${word} not found`;
                }  

            break;
            case 'jp':
                if(Japanese[component][word]){
                    return Japanese[component][word];
                }else{
                    return `word ${word} not found`;
                }
            break;
            default:
                return 'language not found';
        }
      }
    }
}