# Weakness

    - No localization

    - Separate components with its styles
      Ex: space-bg-card in LimitedOfferCard.js

    - Hard to visualize components relationship with others
      Ex: vacancy.js and SuburbCard.js

    - Not consistent filename
      Ex: src/component/dashboard

    - Extreme large component
      Ex: layout/searchLayout/SearchLayout

    - Extreme large image
      Ex: https://systest.space.myxplor.com/gallery/3aa507c2f8384699bd25624c74550057eb1598ab2153df08f2df5e6efa2c81f1/org-photos/original/d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35.png

    - ClassName without random hash
      Ex: space-bg-card in Rocket Childcare

    - [Consider]: Hard to manage global state with Context

    - Backend return a message instead of a status code like 'validate.required'

    - Import entire lodash
      Ex: import { get } from 'lodash'

    - Eslint errors aren't fixed

    - No have a formatter tool like Prettier

# Improve

    - Support localization
    - Need a scalable project structure
    - Able to track request automatically
    - Optimize bundle size with lodash, moment...
    - Compress resource using brotli, gzip
    - Use Typescript
    - Support absolute paths

# Step

    - Libraries
    - Project structure and tools
    - NextJS and Typescript
    - Component structure
    - Styles
    - Localization
    - Redux flow
    - Track request
    - Bundle analyzer
    - Compression
    - Unit testing

# Discuss

    - Should we keep both Typescript
    - Should we implement both Unit Test and Automation Test

# Tool

    - https://space-coach-ui-boilerplate.vercel.app
    - https://developers.google.com/speed/pagespeed/insights/
    - https://smallseotools.com/check-gzip-compression

# Reference

    - https://feralamillo.medium.com/create-react-app-typescript-testing-with-jest-and-enzyme-869fdba1bd3
    - https://github.com/cedrickchee/react-typescript-jest-enzyme-testing

# Summary

    - Localization
    - Keep Typescript and remove PropTypes
    - Relative component tree
    - Custom route without conform nextJS routes
    - Styles
      . Consider Tailwind styles(util class)
      . keep current component style
      - Combine Tailwind and scss, remove styled-component

    - Filename format: [name-type].[type].tsx
    - Keep one component in one file, should split into smaller
    - BE and FE communicate via status code
    - Format and no errors before commit to git
    - 3 import blocks
