# Technical Plan

## BusMall Planning

### Needed Pages:

- Main app displaying image choices to user
- Page displaying personal results to user 
- Page for market research team compiling results across users

### Data to Save:

- User selection data
    - Update each time user selects a product
    - Update how many times product was shown before selected

### Data to Retrieve:

- Product data needs to be retrieved
    - It's saved in the beginning with bootstrapping

### Rules: 

- No repeating images in set of three
- Images selected by user won't be shown again
- The app lasts for 25 rounds
- Session restarts on page load
- Data is shown to user after final round

### Flowchart:

- Reset user data on page load
- Get products from the store
- Get three random products 
    - Products don't repeat
- Display each product to the (left, right, middle)
- User selects one of the three choices
- Add to number of rounds 
- If there are still rounds left:
    - Update display on page load from first step
- If no rounds remaining: 
    - Hide the quiz
    - Get data on user choices and number of appearances
    - Show user results in graph form
    