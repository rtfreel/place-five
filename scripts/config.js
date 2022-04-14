const 
    MAX_SIZE = 15,
    MIN_SIZE = 5,
    CELLS_TO_WIN = 5,
    SIZE_FONT_REL = {
        5: 10,
        6: 8.4,
        7: 7.1,
        8: 6.1,
        9: 5.4,
        10: 4.8,    
        11: 4.3,
        12: 3.9,
        13: 3.6,
        14: 3.3,
        15: 3
    };

const
    AI_NO_INTELLIGENCE = {
        ONE_STEP_WIN: 0,
        PREVENT_ONE_STEP_WIN: 0,
        PREVENT_SEQ_LONGER: 0,
        PREVENT_SEQ_EQUALS: 0,
        PREVENT_SEQ_SHORTER: 0,
        PREVENT_SPREAD: 0,
        WIN_MOVE: 0,
        SPREAD_MOVE: 0
    },
    AI_EASY = {
        ONE_STEP_WIN: 0.2,
        PREVENT_ONE_STEP_WIN: 0.2,
        PREVENT_SEQ_LONGER: 0,
        PREVENT_SEQ_EQUALS: 0,
        PREVENT_SEQ_SHORTER: 0,
        PREVENT_SPREAD: 0,
        WIN_MOVE: 0.2,
        SPREAD_MOVE: 1
    },
    AI_MEDIUM = {
        ONE_STEP_WIN: 0.5,
        PREVENT_ONE_STEP_WIN: 0.5,
        PREVENT_SEQ_LONGER: 0.4,
        PREVENT_SEQ_EQUALS: 0.2,
        PREVENT_SEQ_SHORTER: 0,
        PREVENT_SPREAD: 0.2,
        WIN_MOVE: 1,
        SPREAD_MOVE: 1
    },
    AI_DIFFICULT = {
        ONE_STEP_WIN: 1,
        PREVENT_ONE_STEP_WIN: 1,
        PREVENT_SEQ_LONGER: 1,
        PREVENT_SEQ_EQUALS: 0.5,
        PREVENT_SEQ_SHORTER: 0.2,
        PREVENT_SPREAD: 0.3,
        WIN_MOVE: 1,
        SPREAD_MOVE: 1
    },
    AI_IMPOSSIBLE = {
        ONE_STEP_WIN: 1,
        PREVENT_ONE_STEP_WIN: 1,
        PREVENT_SEQ_LONGER: 1,
        PREVENT_SEQ_EQUALS: 1,
        PREVENT_SEQ_SHORTER: 1,
        PREVENT_SPREAD: 1,
        WIN_MOVE: 1,
        SPREAD_MOVE: 1
    };