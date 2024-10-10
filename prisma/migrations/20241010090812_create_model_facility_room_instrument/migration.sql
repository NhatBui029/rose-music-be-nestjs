-- CreateTable
CREATE TABLE `facility` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `address` VARCHAR(1000) NOT NULL,
    `imageUrl` VARCHAR(2000) NOT NULL,

    UNIQUE INDEX `facility_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `note` VARCHAR(1000) NOT NULL,
    `imageUrl` VARCHAR(2000) NOT NULL,
    `facility_id` INTEGER NOT NULL,

    UNIQUE INDEX `room_facility_id_name_key`(`facility_id`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instrument` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('PIANO', 'GUITAR', 'ORGAN') NOT NULL,
    `status` ENUM('USING', 'USED', 'NEW') NOT NULL,
    `price` DECIMAL(11, 0) NOT NULL,
    `count_in_stock` INTEGER NOT NULL,
    `facility_id` INTEGER NOT NULL,

    UNIQUE INDEX `instrument_type_name_key`(`type`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room_instrument` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `room_id` INTEGER NOT NULL,
    `instrument_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    UNIQUE INDEX `room_instrument_room_id_instrument_id_key`(`room_id`, `instrument_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `room` ADD CONSTRAINT `room_facility_id_fkey` FOREIGN KEY (`facility_id`) REFERENCES `facility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `instrument` ADD CONSTRAINT `instrument_facility_id_fkey` FOREIGN KEY (`facility_id`) REFERENCES `facility`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `room_instrument` ADD CONSTRAINT `room_instrument_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `room_instrument` ADD CONSTRAINT `room_instrument_instrument_id_fkey` FOREIGN KEY (`instrument_id`) REFERENCES `instrument`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
