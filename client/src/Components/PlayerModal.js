import React from 'react'

function PlayerModal() {
    return (
        <div className='Modal Modal--Generic Modal-Item'>
            <div className='Modal-Item-Info'>
                <div className='Modal-Item-Player-Header'>
                    <div className='Modal-Item-Name'>
                        Nic Winkler
                    </div>
                </div>
            </div>
            <div className='Model-Item-Content'>
                <ul className='Player-Info-Stats'>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>
                            Current Vibe
                        </div>
                        <span className='Player-Vibe-Line Modal-Item-Vibe-MostExcellent'>
                            <span>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 10 16' className='Player-Vibe-Line-Arrow' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule='evenodd' d="M5 3L0 9h3v4h4V9h3L5 3z"></path>
                                </svg>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 10 16' className='Player-Vibe-Line-Arrow' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule='evenodd' d="M5 3L0 9h3v4h4V9h3L5 3z"></path>
                                </svg>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 10 16' className='Player-Vibe-Line-Arrow' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path fillRule='evenodd' d="M5 3L0 9h3v4h4V9h3L5 3z"></path>
                                </svg>
                                <div className='Player-Vibe-Line-Text'>Most Excellent</div>
                            </span>
                        </span>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>
                            Batting
                        </div>
                        <div className='Modal-Item-Ratings'>
                            <span>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z'></path>
                                </svg>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M11.5 4.3c-.9 1.9-2.2 4.8-2.2 4.8s-3.1.4-5.2.6c-.2 0-.4.2-.4.3-.1.2 0 .4.1.5 1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5.2.2.4.2.6.1 1.8-1 4.6-2.6 4.6-2.6v-13.3c-.2 0-.4.2-.5.3z'></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>
                            Pitching
                        </div>
                        <div className='Modal-Item-Ratings'>
                            <span>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z'></path>
                                </svg>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M11.5 4.3c-.9 1.9-2.2 4.8-2.2 4.8s-3.1.4-5.2.6c-.2 0-.4.2-.4.3-.1.2 0 .4.1.5 1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5.2.2.4.2.6.1 1.8-1 4.6-2.6 4.6-2.6v-13.3c-.2 0-.4.2-.5.3z'></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>
                            Baserunning
                        </div>
                        <div className='Modal-Item-Ratings'>
                            <span>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z'></path>
                                </svg>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M11.5 4.3c-.9 1.9-2.2 4.8-2.2 4.8s-3.1.4-5.2.6c-.2 0-.4.2-.4.3-.1.2 0 .4.1.5 1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5.2.2.4.2.6.1 1.8-1 4.6-2.6 4.6-2.6v-13.3c-.2 0-.4.2-.5.3z'></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>
                            Defense
                        </div>
                        <div className='Modal-Item-Ratings'>
                            <span>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z'></path>
                                </svg>
                                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M11.5 4.3c-.9 1.9-2.2 4.8-2.2 4.8s-3.1.4-5.2.6c-.2 0-.4.2-.4.3-.1.2 0 .4.1.5 1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5.2.2.4.2.6.1 1.8-1 4.6-2.6 4.6-2.6v-13.3c-.2 0-.4.2-.5.3z'></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </ul>
                <div className='Player-Info-Items'>
                    <div className='Player-Info-Items-Box'>
                        <div className='Player-Info-Items-Header'>Item</div>
                        <div className='Player-Info-Items-Details'>
                            <div className='Player-Info-Items-Name'>None</div>
                        </div>
                    </div>
                    <div className='Player-Info-Items-Box'>
                        <div className='Player-Info-Items-Header'>Armor</div>
                        <div className='Player-Info-Items-Details'>
                            <div className='Player-Info-Items-Name'>None</div>
                        </div>
                    </div>
                </div>
                <ul className='Player-Info-Bio'>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>Evolution</div>
                        <div className='Player-Info-Line-Body'>Base</div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>Pregame Ritual</div>
                        <div className='Player-Info-Line-Body'>Doing a good deed and telling everyone about it</div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>Coffee Style</div>
                        <div className='Player-Info-Line-Body'>Flat White</div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>Blood Type</div>
                        <div className='Player-Info-Line-Body'>Grass</div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>Fate</div>
                        <div className='Player-Info-Line-Body'>28</div>
                    </div>
                    <div className='Player-Info-Line'>
                        <div className='Player-Info-Line-Header'>Soulscream</div>
                        <div className='Player-Soulscream'>
                            <div className='Player-Soulscream-Body'>OAAEOOAAEOOHOXIEHOXIEH</div>
                        </div>
                        
                    </div>
                </ul>
            </div>
            
        </div>
    )
}

export default PlayerModal