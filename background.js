chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ corsEnabled: true });
    chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ["cors_rules"]
    });
});

chrome.storage.onChanged.addListener((changes) => {
    if (changes.corsEnabled.newValue) {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: ["cors_rules"]
        });
    } else {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: ["cors_rules"]
        });
    }
});