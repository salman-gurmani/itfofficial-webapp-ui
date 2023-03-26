import React, { useState, useEffect } from 'react'
import './styles.css'

const words = ['tasty', 'wonderful', 'fancy', 'beautiful', 'cheap']

function SplitTextAnimation() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [wordArray, setWordArray] = useState([])

  useEffect(() => {
    const words = document.getElementsByClassName('word')
    const newWordArray = []

    for (let i = 0; i < words.length; i++) {
      splitLetters(words[i])
    }

    setWordArray(newWordArray)

    function splitLetters(word) {
      const content = word.innerHTML
      word.innerHTML = ''
      const letters = []

      for (let i = 0; i < content.length; i++) {
        const letter = document.createElement('span')
        letter.className = 'letter'
        letter.innerHTML = content.charAt(i)
        word.appendChild(letter)
        letters.push(letter)
      }

      newWordArray.push(letters)
    }
  }, [])

  useEffect(() => {
    const currentWord = wordArray[currentWordIndex]
    const nextWordIndex =
      currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1
    const nextWord = wordArray[nextWordIndex]

    for (let i = 0; i < currentWord.length; i++) {
      animateLetterOut(currentWord, i)
    }

    nextWord[0].parentElement.style.opacity = 1

    for (let i = 0; i < nextWord.length; i++) {
      nextWord[i].className = 'letter behind'
      animateLetterIn(nextWord, i)
    }

    setCurrentWordIndex(nextWordIndex)

    function animateLetterOut(word, i) {
      setTimeout(() => {
        word[i].className = 'letter out'
      }, i * 80)
    }

    function animateLetterIn(word, i) {
      setTimeout(() => {
        word[i].className = 'letter in'
      }, 340 + i * 80)
    }
  }, [currentWordIndex, wordArray])

  return (
    <div className="text">
      <p>Nachos are</p>
      <p>
        {words.map((word, index) => (
          <span key={index} className={`word ${getColorClass(index)}`}>
            {word}
          </span>
        ))}
      </p>
    </div>
  )

  function getColorClass(index) {
    switch (index) {
      case 0:
        return 'wisteria'
      case 1:
        return 'belize'
      case 2:
        return 'pomegranate'
      case 3:
        return 'green'
      case 4:
        return 'midnight'
      default:
        return ''
    }
  }
}

export { SplitTextAnimation }
