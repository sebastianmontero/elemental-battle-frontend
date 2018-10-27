import { StorageKeys } from '../const';

export default {
    cardgameKey() {
        return localStorage.getItem(StorageKeys.CARDGAME_KEY);
    },
    setCardgameKey(value) {
        localStorage.setItem(StorageKeys.CARDGAME_KEY, value);
    },
    removeCardgameKey() {
        localStorage.removeItem(StorageKeys.CARDGAME_KEY);
    },
    cardgameAccount() {
        return localStorage.getItem(StorageKeys.CARDGAME_ACCOUNT);
    },
    setCardgameAccount(value) {
        localStorage.setItem(StorageKeys.CARDGAME_ACCOUNT, value);
    },
    removeCardgameAccount() {
        localStorage.removeItem(StorageKeys.CARDGAME_ACCOUNT);
    },
    isAccountStored() {
        return !!this.cardgameAccount();
    },
};
