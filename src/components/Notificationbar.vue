<template>
    <div class="notification-bar">
        <img src="@/assets/notification-icon.svg" alt="Notification Icon" class="notification-icon" />
        <span class="notification-text">You have a new message</span>

        <button class="detail-button">
            <img src="@/assets/detail-icon.svg" alt="Detail Icon" class="detail-icon" />
            <span class="detail-text">Detail</span>
        </button>
    </div>
</template>

<script setup>

</script>

<style scoped>

.notification-bar {
    background-color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 0px 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 38px;
}

.notification-icon {
    height: 17px;
    width: 17px;
}

.notification-text {
    flex-grow: 1;
    margin-left: 10px;
    color: #333;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
}


.detail-button {
    background: linear-gradient(272.37deg, #477bff 1.68%, #2b97ff 95.19%);
    color: white;
    border: none;
    border-radius: 15px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    height: 26px;
}

.detail-icon {
    height: 14px;
    width: 14px;
    margin-right: 5px;
}

.detail-text {
    position: relative;
    top: -2px;
}

@media (max-width: 320px) {
    .notification-bar {
        background-color: white;
        border-radius: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin: 0px 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        height: 30px;
    }

    .detail-text {
        position: relative;
        top: -2px;
        font-size: 10px
    }
}

</style>