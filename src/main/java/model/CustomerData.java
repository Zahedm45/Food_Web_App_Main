package model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Data
@Table(name = "test") //WATCH out  USER is a reserved name!
@Getter
@Setter
@Builder
@ToString
@RequiredArgsConstructor
@AllArgsConstructor

public class CustomerData {
    @Id @GeneratedValue
    @Column
    private int id;
    @Column
    private String email;
    @Column
    private String name;
    @Column
    private int number;
    @Column
    static String DATE_PATTERN = "dd.MM.yyyy HH:mm:ss";
    private Date date;
    //public CustomerData();
}
