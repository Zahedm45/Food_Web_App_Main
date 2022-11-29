package model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

import static jakarta.persistence.TemporalType.DATE;

@Entity
@Data
@Table(name = "customerData") //WATCH out  USER is a reserved name!
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
    // Saves as EPOCH if this data needs to be pulled there need to be converted
    @Temporal(DATE)
    private Date date;
    @Column
    private String time;
    //public CustomerData();
}
