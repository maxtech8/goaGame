<template>
    <footer class="navbar">
        <img src="@/assets/tabbar.png" class="tabbar" />
        <div class="button-container">
            <button @click="goTo('home')" class="navbar-button" :class="{ 'active': activeButton === 'home' }" style="margin-left: 20px;">
                <img :src="activeButton === 'home' ? '/src/assets/home-active.svg' : '/src/assets/home.svg'" alt="Home Icon" class="navbar-icon" />
                <span :class="{ 'active-text': activeButton === 'home' }" class="navbar-text">Home</span>
            </button>
            <button @click="goTo('activity')" class="navbar-button" :class="{ 'active': activeButton === 'activity' }">
                <img :src="activeButton === 'activity' ? '/src/assets/activity-active.svg' : '/src/assets/activity.svg'" alt="activity Icon" class="navbar-icon" />
                <span :class="{ 'active-text': activeButton === 'activity' }" class="navbar-text">Activity</span>
            </button>
            <button @click="goTo('promotion')" class="navbar-button-promotion" :class="{ 'active': activeButton === 'promotion' }" style="margin-left:5px;">
                <div class="promotion">
                    <img src="@/assets/promotion.svg" :class="{ 'active-icon': activeButton === 'promotion' }" alt="Promotion Icon" class="navbar-icon-promotion" />
                </div>
                <span :class="{ 'active-text-promotion': activeButton === 'promotion' }" class="navbar-text-promotion">Promotion</span>
            </button>
            <button @click="goTo('wallet')" class="navbar-button" :class="{ 'active': activeButton === 'wallet' }">
                <img :src="activeButton === 'wallet' ? '/src/assets/wallet-active.svg' : '/src/assets/wallet.svg'" alt="wallet Icon" class="navbar-icon" />
                <span :class="{ 'active-text': activeButton === 'wallet' }" class="navbar-text">Wallet</span>
            </button>
            <button @click="goTo('account')" class="navbar-button" :class="{ 'active': activeButton === 'account' }" style="margin-right: 20px;">
                <img :src="activeButton === 'account' ? '/src/assets/account-active.svg' : '/src/assets/account.svg'" alt="account Icon" class="navbar-icon" />
                <span :class="{ 'active-text': activeButton === 'account' }" class="navbar-text">Account</span>
            </button>
        </div>
    </footer>

</template>

<script>
export default {
    data() {
        return {
            activeButton: null,
        }
    },
    methods: {
        goTo(route) {
            this.activeButton = route;
            this.updateIcons();
            this.$router.push({ name: route });
        },
        updateIcons() {
            const buttons = ['home', 'activity', 'promotion', 'wallet', 'account'];
            buttons.forEach(button => {
                const imgElement = document.getElementById(`${button}-img`);
                if (imgElement) {
                    imgElement.src = this.activeButton === button ? `@/assets/${button}-active.svg` : `@/assets/${button}.svg`;
                }
            });
        }
    }
}
</script>

<style scoped>
.tabbar {
    height: 75px;
    width: 400px;
    position: absolute;
    z-index: 0;
    margin-top: 30px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 100px;
    position: fixed;
    bottom: 0px;
    overflow: hidden;
}

.navbar-icon {
    height: 23px;
}

.navbar-icon-promotion {
    height: 26px;
    margin-top: 5px;
}
.promotion {
    margin-bottom: 10px;
    margin-left: 2px;
    background: linear-gradient(180deg, #6b7cff 0%, #779fff 100%);
    border-radius: 50%; /* This creates a circle */
    border: 3px solid white; /* White outline of 2 pixels */
    width: 57px; /* Adjust according to your design */
    height: 57px; /* Adjust according to your design */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Additional styles */
}

.navbar-button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #949494;
    /* Adjust this to ensure text is readable over the image */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}
.navbar-button-promotion{
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #949494;
    /* Adjust this to ensure text is readable over the image */
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: -12px;
}

.navbar-text {
    margin-top: 5px;
    /* Adjust this margin to control the spacing between the icon and the text */
    color: #949494;
    font-size: 11.7px;
}
.navbar-text-promotion {
    color: #949494;
    font-size: 11.7px;
}

.active {
    color: #4781FF !important; /* Change text color */
}


.active-text {
    color: #4781FF !important; /* Change text color */
}

.active-text-promotion {
    color: #4781FF !important; /* Change text color */
}


.button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    /* Position relative to contain absolutely positioned children */
    z-index: 1;
    /* Ensure buttons are in front of the image */
}



@media (max-width: 480px) {
    .navbar {
        width: 100%;
    }

    .tabbar {
        width: 100%;
    }
}
</style>