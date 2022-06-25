module.exports = {
    wordFrequency: function (doc, word) {
        const wordsArray = this.stringToWordsArray(doc)

        const occurences = wordsArray.filter(
            w => w.toLowerCase() === word.toLowerCase()
        )

        return occurences.length
    },

    wordSentences: function (doc, word) {
        let sentences = ['']
        let sentenceCount = 0
        const sentenceSeparators = ['.', ':', ';', '\n']

        for (let i = 0; i < doc.length; i++) {
            if (!sentenceSeparators.includes(doc[i])) {
                sentences[sentenceCount] += doc[i]
            } else {
                sentences[sentenceCount] += doc[i]
                sentences[++sentenceCount] = ''
            }
        }

        const matchSentences = []
        sentences.forEach(sentence => {
            const normalizedSentence = sentence.toLowerCase().trim()
            if (sentence.toLowerCase().includes(word.toLowerCase())) {
                matchSentences.push(normalizedSentence)
            }
        })

        return matchSentences
    },

    topWords: function (doc, count, minWordLength) {
        const wordMap = {}

        words = this.stringToWordsArray(doc).filter(word => (
            word.length >= minWordLength
        ))

        words.forEach(word => {
            normalizedWord = word.toLowerCase()
            wordMap[normalizedWord] = (wordMap[normalizedWord] || 0) + 1
        })

        const wordArray = []
        for (let word of Object.keys(wordMap)) {
            wordArray.push([word, wordMap[word]])
        }

        const sortedWordArray = this.sortWordsByOcurrence(wordArray)

        return sortedWordArray.slice(0, count)
    },

    stringToWordsArray: function (text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    },

    sortWordsByOcurrence(array) {
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let j;
            for (j = i - 1; j >= 0 && current[1] > array[j][1]; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = current;
        }
        return array;
    },
}

