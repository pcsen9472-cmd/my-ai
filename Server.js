const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/generate', async (req, res) => {
    const { promptType, userPrompt } = req.body;
    let responseText = "";
    if (promptType === 'video') {
        responseText = `Video AI Prompt Generated: Cinematic animation for "${userPrompt}".`;
    } else if (promptType === 'music') {
        responseText = `Music Prompt Ready for Suno/Udio: Bollywood/Hollywood style melody for "${userPrompt}".`;
    } else if (promptType === 'trading') {
        responseText = `Market Analysis for "${userPrompt}": Bullish trend detected, monitor entries.`;
    } else {
        responseText = `AI Assistant Response: Successfully processed "${userPrompt}"!`;
    }
    res.json({ success: true, result: responseText });
});

app.listen(PORT, () => {
    console.log(`Server is running live on port ${PORT}`);
});
