const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });

manager.addDocument('en', 'I am very happy today', 'sentiment:positive');
manager.addDocument('en', 'I feel sad about what happened', 'sentiment:negative');
manager.addDocument('en', 'I am excited about the new project', 'sentiment:positive');
manager.addDocument('en', 'That news makes me very happy', 'sentiment:positive');
manager.addDocument('en', 'I don\'t like how this has been', 'sentiment:negative');

(async () => {
    await manager.train();
    console.log('Modelo entrenado');

    const text = 'Today I feel happy and excited';
    const response = await manager.process('en', text);
    console.log('Texto:', text);
    console.log('Sentimiento:', response.sentiment);
})();