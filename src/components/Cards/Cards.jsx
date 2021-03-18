import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
    
    return(
       <div className= {styles.container}>
           <div className={styles.last_update}>
           { new Date(lastUpdate).toDateString()}
           </div>

           <div className={styles.cards}>
               <div>
                    <div className={styles.deaths}>
                        <CountUp start={1234} end={deaths.value} duration={1.0} />    
                    </div>
                    <div className={styles.deaths_title}>
                        Deaths
                    </div>
               </div>
               
                <div>
                    <div className={styles.confirmed}>
                        <CountUp start={1234} end={confirmed.value} duration={1.0} />
                    </div>
                    <div className={styles.confirmed_title}>
                        Confirmed
                    </div>
                </div>
               
               <div>
                    <div className={styles.recovered}>
                        <CountUp start={1234} end={recovered.value} duration={1.0} />
                    </div>
                    <div className={styles.recovered_title}>
                        Recovered
                    </div>
               </div>
               
           </div>

           {/* <Grid container spacing ={3} justify ="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" >Confirmed</Typography>
                        <Typography variant="h5" >
                            <CountUp start={1234} end={confirmed.value} duration={1.0} />
                        </Typography>
                        <Typography color="textSecondary">  { new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2">Numbre of Active case of Covid-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom >Recovered</Typography>
                        <Typography variant="h5" >
                            <CountUp start={1234} end={recovered.value} duration={1.0} />
                        </Typography>
                        <Typography color="textSecondary"> { new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="body2">Numbre of recoveries of Covid-19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom >Deaths</Typography>
                        <Typography variant="h5" >
                            <CountUp start={1234} end={deaths.value} duration={1.0} />
                            </Typography>
                        <Typography color="textSecondary"> { new Date(lastUpdate).toDateString()}  </Typography>
                        <Typography variant="body2">Numbre of deaths caused by Covid-19</Typography>
                    </CardContent>

                </Grid>
           </Grid> */}
       </div>
    )
}

export default Cards