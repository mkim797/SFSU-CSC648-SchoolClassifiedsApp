USE CSC648;

INSERT INTO category (category_name)
VALUES
("Art"),
("Furniture"),
("Books"),
("Electronics"),
("Sporting Goods"),
("Tutoring Services"),
("Office Supplies"),
("Kitchen");

INSERT INTO item (item_name, item_desc, item_price, item_pic, item_category)
VALUES
("Rare painting", "Up and coming artist.  Will be priceless in 5 yrs!", 100.00, LOAD_FILE('../static/pics/art.jpeg'), 1),
("Dictionary", "It's a dictionary", 15.00, LOAD_FILE('../static/pics/dictionary.jpeg'), 3),
("Gooseneck Kettle", "For your everyday coffee.", 25.00, LOAD_FILE('../static/pics/gooseneckkettle.jpeg'), 8),
("Bicycle Helmet", "To protect your brain on dangerous SF roads.", 30.00, LOAD_FILE('../static/pics/helmet.jpeg'), 5),
("Ice Sculpture", "For incredible parties! Pick it up soon before it melts", 999.00, LOAD_FILE('../static/pics/icesculpture.jpeg'), 1),
("A white lamp", "So you can stay up late, studying.  It's boring so it won't distract you.", 50.00, LOAD_FILE('../static/pics/lamp.jpeg'), 2),
("Snowboard", "Jump on this popsicle stick and barrel down the mountain! WHEEE!", 200.00, LOAD_FILE('../static/pics/snowboard.jpeg'), 5),
("Stapler", "Channel your inner Office Space", 10.00, LOAD_FILE('../static/pics/stapler.jpeg'), 7);
