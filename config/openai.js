const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});

exports.openai = new OpenAIApi(configuration);
