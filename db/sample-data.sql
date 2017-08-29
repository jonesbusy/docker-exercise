-- Create the single talbe to store JSON documents
CREATE TABLE `SAMPLE_TABLE` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `RAW_DATA` JSON NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Insert some sample content
INSERT INTO `SAMPLE_TABLE`(`RAW_DATA`) VALUES
	('{"name" : "John Doe"}'),
	('{"name" : "Jane Doe"}');
