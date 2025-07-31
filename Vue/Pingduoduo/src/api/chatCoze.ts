import axios from 'axios';

const url = 'https://api.coze.cn/open_api/v2/chat';
const apiKey = 'pat_h4HmkU0Os6QjcNVj22PWGEkP0DNHryuTuPD9fnfbEcss8vUsuTXjJvMOMc1PUCvR';
const botId = '7399169717191606272';

import { FetchDataRequest } from '../types/cozeConfig.ts'

async function getCozeData(content: string): Promise<any> {
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    const data: FetchDataRequest = {
        "bot_id": botId,
        "conversation_id": "456",
        "user": "user_1",
        "query": content,
        "stream": false,
        "chat_history": [
            { "role": "user" },
            { "role": "assistant", "type": "answer" }
        ]
    };

    try {
        const response: any = await axios.post(url, data, { headers });

        console.log(response);

        return response;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
export default getCozeData